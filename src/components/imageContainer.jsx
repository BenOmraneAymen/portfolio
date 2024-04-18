
export default function ImageContainer({image,text,style}){
return(
    <div className="flex flex-col items-center my-2 mx-1" >
        <img src={image} alt={text} className={style || "w-full rounded-t-lg"} />
        <p className="text-center" >{text}</p>
    </div>
)
}