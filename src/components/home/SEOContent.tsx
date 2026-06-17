type Props = {
  content?: string;
};

export default function SEOContent({
  content,
}: Props) {
  if (!content) return null;

  return (
    <section className="mt-12">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div
          className="
            seo-content

            [&_h2]:mt-8
            [&_h2]:mb-4
            [&_h2]:text-2xl
            [&_h2]:font-bold

            [&_p]:mb-4
            [&_p]:leading-7
            [&_p]:text-slate-600
            dark:[&_p]:text-slate-300

            [&_ul]:mb-4
            [&_ul]:list-disc
            [&_ul]:pl-6

            [&_li]:mb-2

            [&_strong]:font-bold
            [&_strong]:text-slate-900
            dark:[&_strong]:text-white

            [&_table]:my-6
            [&_table]:w-full
            [&_table]:border-collapse

            [&_th]:border
            [&_th]:bg-slate-100
            dark:[&_th]:bg-slate-800
            [&_th]:p-3
            [&_th]:text-left

            [&_td]:border
            [&_td]:p-3
          "
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </section>
  );
}