export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">DevCalc</h3>
            <p className="mt-2 text-sm text-gray-600">
              Free online calculators for finance, health, vehicle,
              education, and daily use.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Finance</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>SIP Calculator</li>
              <li>EMI Calculator</li>
              <li>FD Calculator</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Health</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>BMI Calculator</li>
              <li>Calorie Calculator</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-sm text-gray-500">
          © 2026 DevCalc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}