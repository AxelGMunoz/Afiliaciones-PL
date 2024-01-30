import { findInputError } from '../utils/findInputError'
import { isFormInvalid } from '../utils/isFormInvalid'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

export const Input = ({
  nameId,
  label,
  type,
  placeholder,
  validation,
  combos,
  comboValue,
  onChangeFunc
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const inputErrors = findInputError(errors, nameId)
  const isInvalid = isFormInvalid(inputErrors)

  return (
    <div className={`flex flex-col ${(type === 'file') ? 'text-xs w-auto' : 'w-full'} gap-2`}>
      <div className="flex justify-between">
        <label htmlFor={nameId} className="uppercase tracking-wide text-gray-700 text-sm font-bold">
          {label}
        </label>

        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <motion.p className="text-xs flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            >
              <MdError /> {inputErrors.error.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {(()=>{
        const input_class = 'p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60'
        const input_placeholder = (placeholder === '') ? label : placeholder

        switch(type){
          case 'select':
            return <select id={nameId} className={input_class}
              {...register(nameId, validation)} onChange={onChangeFunc}>
                <option defaultValue={(comboValue === '') ? 'no' : comboValue}>
                  {input_placeholder}
                </option>
                { combos.map((item,index) => <option key={index} value={index}>{item}</option>) }
            </select>
          case 'area':
            return <textarea id={nameId} type={type} placeholder={input_placeholder} {...register(nameId, validation)}
              className={`${input_class} min-h-[10rem] max-h-[20rem] resize-y`}></textarea>
          case 'file':
            return <input id={nameId} type={type} placeholder={input_placeholder} {...register(nameId, validation)}
              className={`${input_class} -mr-32 cursor-pointer`} />
          default:
            return <input id={nameId} type={type} placeholder={input_placeholder} {...register(nameId, validation)}
              className={input_class} />
        }
      })()}
    </div>
  )
}