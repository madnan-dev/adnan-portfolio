export default function SectionHeading({ kicker, title, description, align = 'left' }) {
  const alignmentClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-3 ${alignmentClass}`}>
      {kicker ? <p className="section-kicker text-sky-300">{kicker}</p> : null}
      <h2 className="section-title text-3xl text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">{description}</p> : null}
    </div>
  );
}