import { toast } from "react-toastify";

export default function Terminal({ title, commands }) {
  let copy = (commands) => {
    let text = "";
    commands.forEach((command) => {
      text += command + "\n";
    });
    navigator.clipboard.writeText(text);
    toast.info("Copied to clipboard");
  };

  return (
    <div className="w-full bg-slate-700 flex flex-col rounded-md my-4 ">
      <div className="w-full bg-slate-300 flex flex-row justify-between rounded-t-md">
        <div className="flex">
          <div className="w-3 h-3 cursor-pointer rounded-full bg-red-500 m-2"></div>
          <div className="w-3 h-3 cursor-pointer rounded-full bg-yellow-500 m-2"></div>
          <div className="w-3 h-3 cursor-pointer rounded-full bg-green-500 m-2"></div>
          <div className="text-gray-600">{title}</div>
        </div>
        <div
          className="flex items-center text-gray-600 cursor-pointer px-2"
          onClick={() => copy(commands)}
        >
          <span class="material-symbols-outlined m-0 p-0 ">content_copy</span>
          copy
        </div>
      </div>
      <div className="flex flex-col gap-1 p-3">
        {commands.map((command) => {
          return <h1 className="text-slate-300">{command}</h1>;
        })}
      </div>
    </div>
  );
}
