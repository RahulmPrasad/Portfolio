"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-[0.6fr_0.5fr_0.5fr] md:grid-rows-2 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card) => (
        <div key={card.id} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? cn(
                    "rounded-lg cursor-pointer fixed inset-0 m-auto max-h-[85vh] max-w-[90vw] md:max-w-[70vw] z-50 flex justify-center items-center flex-wrap flex-col",
                    card.expandedAspect || "aspect-[4/3]"
                  )
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-2xl h-full w-full"
                : "bg-white rounded-2xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} isSelected={selected?.id === card.id} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-md opacity-0 z-40",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 1 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card, isSelected }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "absolute inset-0 h-full w-full transition duration-200",
        isSelected ? "object-contain" : "object-cover object-top"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-4 z-[70] text-white"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
