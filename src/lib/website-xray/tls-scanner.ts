/**
 * src/lib/website-xray/tls-scanner.ts
 * Passive TLS certificate inspection via raw TLS socket.
 */

import tls from "tls";
import { InfrastructureDetection } from "@/src/lib/website-xray/types";

export async function scanTls(hostname: string, port = 443): Promise<InfrastructureDetection["tls"]> {
  return new Promise((resolve) => {
    const socket = tls.connect(
      {
        host: hostname,
        port,
        servername: hostname,
        rejectUnauthorized: false,
        timeout: 6000,
      },
      () => {
        try {
          const cert = socket.getPeerCertificate();
          const authorized = socket.authorized;
          const protocol = socket.getProtocol() || undefined;

          if (!cert || !cert.valid_to) {
            socket.destroy();
            return resolve({ enabled: true, protocol, authorized });
          }

          const validToDate = new Date(cert.valid_to);
          const validFromDate = new Date(cert.valid_from);
          const now = new Date();
          const diffDays = Math.round((validToDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

          const formatField = (field: unknown): string => {
            if (Array.isArray(field)) return field.join(", ");
            if (typeof field === "string") return field;
            return "";
          };

          let issuerStr = "Unknown Issuer";
          if (typeof cert.issuer === "object" && cert.issuer) {
            const org = formatField(cert.issuer.O);
            const cn = formatField(cert.issuer.CN);
            const ou = formatField(cert.issuer.OU);
            issuerStr = org || cn || ou || "Unknown";
          }

          socket.destroy();
          resolve({
            enabled: true,
            protocol,
            issuer: issuerStr,
            validFrom: validFromDate.toISOString().split("T")[0],
            validTo: validToDate.toISOString().split("T")[0],
            daysRemaining: diffDays,
            authorized,
          });
        } catch {
          socket.destroy();
          resolve({ enabled: true, authorized: socket.authorized });
        }
      }
    );

    socket.on("error", () => {
      socket.destroy();
      resolve({ enabled: false });
    });

    socket.on("timeout", () => {
      socket.destroy();
      resolve({ enabled: false });
    });
  });
}

