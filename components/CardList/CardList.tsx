import React from "react";

interface CardListProps {
    children: React.ReactNode;
}

const CardList = ({children}: CardListProps) => {
    return <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 py-12 ">{children}</div>
}

export default CardList