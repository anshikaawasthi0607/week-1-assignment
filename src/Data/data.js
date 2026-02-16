
const generateNestedLevels = (parentId, depth, maxDepth) => {
  if (depth > maxDepth) return [];

  const currentId = `${parentId}-${depth}`;
  return [
    {
      id: currentId,
      title: `Accordion ${parentId} - Level ${depth}`,
      children: generateNestedLevels(parentId, depth + 1, maxDepth)
    }
  ];
};

// 10 nested accordions (with 10 levels deep nesting)
const nestedAccordions = Array.from({ length: 10 }, (_, index) => {
  const id = `${index + 1}`;
  return {
    id,
    title: ` Accordion ${id}`,
    children: generateNestedLevels(id, 1, 10) // 10 levels deep
  };
});

// 20 simple accordions (no nesting)
const simpleAccordions = Array.from({ length: 20 }, (_, index) => {
  const id = `simple-${index + 1}`;
  return {
    id,
    title: `Accordion ${index + 11}`,
    children: [] 
  };
});


export const accordionData = [...nestedAccordions, ...simpleAccordions];
