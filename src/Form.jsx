import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { GrValidate } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { Formulario } from './components/Formulario'
import { motion } from 'framer-motion'
import { motionAnim } from './utils/vars'

export const Form = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log("envio", data)
    methods.reset()
    setSuccess(true)
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container w-full max-w-6xl p-5 mx-auto"
      >

        <Formulario />

        <div className="mt-5">
          <motion.p {...motionAnim(0.5)}
            className="font-semibold text-violet-500 mb-5 flex items-center gap-2 place-content-center">
            <BsFillCheckSquareFill /> Adhiero al Partido Libertario de La Pampa
          </motion.p>
          <motion.button {...motionAnim(0.55)}
            disabled={success}
            onClick={onSubmit}
            className="mx-auto p-5 rounded-md bg-violet-600 hover:bg-violet-800 font-semibold text-white flex items-center gap-1"
          >
            <GrValidate className='text-xl' />
            Afiliarme
          </motion.button>
          {success && (
            <p className="font-semibold text-green-500 mt-5 flex items-center gap-2 place-content-center">
              <BsFillCheckSquareFill /> El formulario se ha enviado correctamente
            </p>
          )}
        </div>
      </form>
    </FormProvider>
  )
}