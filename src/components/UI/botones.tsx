interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export function BtnBoton({ children, ...props }: Props) {
  return (
    <button className="flex w-full justify-center rounded-md bg-rose-400 px-3 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      {children}
    </button>
  );
}
