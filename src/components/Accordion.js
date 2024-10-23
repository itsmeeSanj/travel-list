import React from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export function Accordion() {
  const [curOpen, setCurOpen] = React.useState(null);

  return (
    <div className='accordion'>
      {faqs.map((item, i) => (
        <AccordionItems
          num={i}
          title={item?.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {item?.text}
        </AccordionItems>
      ))}
    </div>
  );
}

const AccordionItems = ({ num, title, text, onOpen, curOpen, children }) => {
  const isOpen = num === curOpen;

  const handleToggleOpen = (id) => {
    onOpen(isOpen ? null : id);
  };

  return (
    <>
      <div
        className={`item ${isOpen && "open"}`}
        onClick={() => handleToggleOpen(num)}
      >
        <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className={`title ${isOpen && "text"}`}>{title}</p>
        <p className='icon'>{!isOpen ? "+" : "-"}</p>
        {isOpen && (
          <div className='content-box'>
            <ul>
              <p>{children}</p>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
