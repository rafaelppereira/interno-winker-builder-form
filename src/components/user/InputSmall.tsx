interface InputSmall {
  label: string;
  placeholder: string;
}

export function InputSmall({ label, placeholder }: InputSmall) {
  return (
    <label className="text-sm">
      {label}
      <input
        className="w-full mt-1 h-12 px-4 rounded-lg border-2 border-gray-300 outline-none focus:ring-2 focus:ring-pink-500 transition-all placeholder:text-sm"
        type="text"
        placeholder={placeholder}
      />
    </label>
  );
}
