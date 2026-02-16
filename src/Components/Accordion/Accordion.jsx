import { useState, useCallback } from "react";
import AccordionItem from "./AccordionItem.jsx";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator.jsx";
import useInfiniteScroll from "../../hooks/useInfiniteScroll.js";
import "./accordion.css";
import EndMessage from "../EndMessage/EndMessage.jsx";

const Accordion = ({ data }) => {
  const [openItems, setOpenItems] = useState({});
  const [displayedItems, setDisplayedItems] = useState(10); 
  const [isLoading, setIsLoading] = useState(false);
  const ITEMS_PER_LOAD = 5;

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const hasMore = displayedItems < data.length;

  const loadMoreItems = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    setTimeout(() => {
      setDisplayedItems((prev) => Math.min(prev + ITEMS_PER_LOAD, data.length));
      setIsLoading(false);
    }, 500);
  }, [isLoading, hasMore, data.length]);

  // infinite scroll hook
  const loadingTriggerRef = useInfiniteScroll(loadMoreItems, isLoading, hasMore);


  const visibleData = data.slice(0, displayedItems);

  return (
    <div className="accordion">
      {visibleData.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          openItems={openItems}
          toggleItem={toggleItem}
        />
      ))}

      {/* Loading indicator */}
      {isLoading && <LoadingIndicator message="Loading more accordions..." />}

      {/* Invisible trigger element for infinite scroll */}
      {hasMore && !isLoading && (
        <div ref={loadingTriggerRef} className="loading-trigger" />
      )}

      {/* End message when all items are loaded */}
      {!hasMore && <EndMessage />}
    </div>
  );
};

export default Accordion;
