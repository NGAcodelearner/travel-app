import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  label: string;
  icon?: string;
};

const Button = ({ type, label, icon }: ButtonProps) => {
  return (
    <button
      className="flex gap-3 rounded-full items-center justify-center bg-emerald-600
     px-5 py-2.5 text-white text-base transition-all hover:bg-emerald-700"
    >
      {icon && <Image src={icon} alt={label} width={24} height={24} />}
      <div className="font-semibold ">{label}</div>
    </button>
  );
};

export default Button;
