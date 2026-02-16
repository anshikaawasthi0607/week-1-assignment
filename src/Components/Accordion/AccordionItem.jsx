import React from "react";

const AccordionItem = ({ item, openItems, toggleItem }) => {
  const isOpen = openItems[item.id];
  return (
    <div className="accordion-item">
      <div
        className="accordion-title"
        role="button" //keyboard
        tabIndex={0} //keyboard
        onClick={() => toggleItem(item.id)}
        onKeyDown={(e) => { //keyboard
          if (e.key === "Enter" || e.key === " ") {
            toggleItem(item.id);
          }
        }}
      >
        {item.title}
      </div>
      
{/* Only show content if isOpen is true. */}
      {isOpen && (
        <div className="accordion-content">

            {/* Infinite Nesting */}

            {/* if there are children → render them the same way. */}
          {item.children.length > 0 &&
            item.children.map((child) => (
              <AccordionItem
                key={child.id}
                item={child}
                openItems={openItems}
                toggleItem={toggleItem}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(AccordionItem);
