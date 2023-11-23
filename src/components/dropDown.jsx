import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

export default function DefaultDropdown() {
  return (
    <Dropdown
      arrowIcon={false}
      label={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 18L20 18"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      }
      class=""
      className="bg-slate-100 rounded-xl"
    >
      <Dropdown.Item className="hover:bg-slate-200">
        <a href="#About">About</a>
      </Dropdown.Item>
      <Dropdown.Item className="rounded-t-xl hover:bg-slate-200">
        <a href="#Skills">Skills</a>
      </Dropdown.Item>
      <Dropdown.Item className="hover:bg-slate-200">
        <a href="#Projects">Projects</a>
      </Dropdown.Item>
      <Dropdown.Item className="rounded-b-xl hover:bg-slate-200">
        <a href="#Contact">Contact me</a>
      </Dropdown.Item>
      <Dropdown.Item className="rounded-b-xl hover:bg-slate-200">
        <Link to={"/blog"}>Blog</Link>
      </Dropdown.Item>
    </Dropdown>
  );
}
