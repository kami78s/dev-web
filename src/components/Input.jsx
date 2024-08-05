import { useState } from 'react';
import clsx from 'clsx';

function Input({ type, id, required, style }) {
  const [isFilled, setIsFilled] = useState(null);
  return (
    <>
      <label
        htmlFor={id}
        className={`block text-2xl font-bold capitalize ${style}`}
      >
        {id}
        {required && <span className="text-[#FF2222]">*</span>}
        <input
          type={type}
          id={id}
          onChange={(e) => setIsFilled(e.target.value.length > 0)}
          className={clsx(
            `mt-3 w-full py-2 px-4 rounded-md border bg-black-bg shadow-sm text-background`,
            {
              'border-red-500': isFilled === false && required,
              'border-yellow-200': isFilled,
            }
          )}
        />
      </label>
    </>
  );
}
export default Input;

// input for telephone no. combine of two fileds
export function TeleInput({ id }) {
  const [isFilled, setIsFilled] = useState(null);

  return (
    <>
      <label
        htmlFor={`${id}-1`}
        className="block text-2xl font-bold capitalize text-primary"
      >
        {id}
        <div className="flex justify-between gap-2 mt-3">
          <input
            type="tel"
            id={`${id}-1`}
            className={clsx(
              'basis-1/4 w-full py-2 px-4 text-background rounded-md border bg-black-bg shadow-sm',
              {
                'border-yellow-200': isFilled,
              }
            )}
          />
          <input
            type="tel"
            id={`$id}-2`}
            onChange={(e) => setIsFilled(e.target.value.length > 0)}
            className={clsx(
              'basis-3/4 w-full py-2 px-4 text-background rounded-md border bg-black-bg shadow-sm',
              {
                'border-yellow-200': isFilled,
              }
            )}
          />
        </div>
      </label>
    </>
  );
}

export function TextareaInput({ id, required, style }) {
  const [isFilled, setIsFilled] = useState(null);

  return (
    <>
      <label
        htmlFor={id}
        className={`block text-2xl font-bold capitalize text-primary ${style}`}
      >
        {id}
        {required && <span className="text-[#FF2222]">*</span>}
        <textarea
          id={id}
          onChange={(e) => setIsFilled(e.target.value.length > 0)}
          className={clsx(
            'h-80 mt-6 w-full py-2  px-4 rounded-md border bg-black-bg shadow-sm text-background',
            {
              'border-red-500': isFilled === false && required,
              'border-yellow-200': isFilled,
            }
          )}
        />
      </label>
    </>
  );
}

export function RadioGroup({ title, required, style }) {
  return (
    <fieldset className={`mt-14 ${style}`}>
      <legend className="text-2xl font-bold capitalize">
        {title}
        {required && <span className="text-[#FF2222]">*</span>}
      </legend>
      <legend className="flex flex-col gap-5 mt-7 text-xl font-light sm:flex-row">
        <label htmlFor="radio1" className="py-1">
          <input
            type="radio"
            name="radio"
            id="radio1"
            className="mr-3 size-4"
          />
          moins de 20
        </label>
        <label htmlFor="radio2" className="py-1">
          <input
            type="radio"
            name="radio"
            id="radio2"
            className="mr-3 size-4"
            defaultChecked
          />
          entre 20 et 50
        </label>
        <label htmlFor="radio3" className="py-1">
          <input
            type="radio"
            name="radio"
            id="radio3"
            className="mr-3 size-4"
          />
          plus de 50
        </label>
      </legend>
    </fieldset>
  );
}