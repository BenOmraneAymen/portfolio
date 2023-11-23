

export default function Terminal({children}){
    return(
        <div className="w-full bg-slate-700 flex flex-col rounded-md " >
            <div className="w-full bg-slate-300 flex flex-row justify-start rounded-t-md" >
                <div className="w-3 h-3 cursor-pointer rounded-full bg-red-500 m-2" ></div>
                <div className="w-3 h-3 cursor-pointer rounded-full bg-yellow-500 m-2" ></div>
                <div className="w-3 h-3 cursor-pointer rounded-full bg-green-500 m-2" ></div>
            </div>
            <div className="flex flex-col gap-1 p-3"  >
                {children}
            </div>
        </div>
    )
}
