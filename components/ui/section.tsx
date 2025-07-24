export default function Section({
    children,
    title,
    spule,
    classes = [],
}: {children: React.ReactNode, title: string, spule: string, classes?: string[]}) {
    return (
      <section id="community" className={`py-20 px-4 ${classes?.join(' ') || ''}`}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{spule}</p>
        </div>
        {children}
      </section>
    );
}