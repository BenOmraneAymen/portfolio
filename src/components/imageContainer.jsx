
export default function ImageContainer({image,text}){
return(
    <div className="flex flex-col items-center my-2 mx-1" >
        <img src={image} alt="" className="w-full rounded-t-lg " />
        <p>{text}</p>
    </div>
)
}