import 'boxicons';
import React from "react";
const obj=[
    {
        name:"Add Transaction",
    },
]

function List(){
    return(
        <div className="flex flex-col py-6 gap-3">
            <h1 className="py-4 font-bold text-xl">History</h1>
            {obj.map((v)=><Transaction category={v}></Transaction>)}
        </div>
    )
}

function Transaction({category}){
    if(!category)return null;
    return(
        <div className="item flex justtify-center bg-gray-50 py-2 rounded-r">
            <button className="px-3"><box-icon size="15px" name="trash"></box-icon></button>
            <span className="block w-full">{category.name??""}</span>
        </div>
    )
}
export default List;