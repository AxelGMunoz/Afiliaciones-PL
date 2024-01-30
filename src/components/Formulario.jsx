import { useState } from 'react'
import { Input } from './Input'
import {
    text_validation,
    email_validation,
    num_validation,
    select_validation,
    date_validation,
    file_validation,
} from '../utils/inputValidations'
import PROVINCIAS from '../utils/provincias.json'
import DEPARTAMENTOS from '../utils/departamentos.json'
import MUNICIPIOS from '../utils/municipios.json'
import { motionAnim, sortNombres } from '../utils/vars'
import { motion } from 'framer-motion'

export const Formulario = () => {
    const [selProvincia, setProvincia] = useState('0')
    
    const funcSelProvincia = () => {
        const getID = document.getElementById('prov_nombre')
        setProvincia(getID.options[getID.selectedIndex].text)
        document.getElementById('prov_departamento').selectedIndex = 0
        document.getElementById('prov_municipio').selectedIndex = 0
    }

    const clase = 'grid gap-4 mb-4 sm:grid-cols-1'

    return <div>
        <motion.div {...motionAnim(0.1)} className={`${clase} md:grid-cols-2`}>
            <Input {...text_validation} nameId='nombres' label='Nombres' />
            <Input {...text_validation} nameId='apellido' label='Apellido' />
        </motion.div>

        <motion.div {...motionAnim(0.15)} className={`${clase} md:grid-cols-3`}>
            <Input {...email_validation} nameId='email' lable='Email' />
            <Input {...num_validation} nameId='tel_cel' label='Teléfono celular' />
            <Input {...num_validation} nameId='tel_fijo' label='Teléfono fijo' />
        </motion.div>

        <motion.div {...motionAnim(0.2)} className={`${clase} md:grid-cols-2`}>
            <Input {...select_validation} nameId='estadocivil' label='Estado civil' combos={['Soltero/a','Casado/a','Viudo/a','Divorciado/a']} />
            <Input {...select_validation} nameId='ocupacion' label='Ocupación' combos={['Item 1','Item 2','Item 3','Item 4','Item 5']}/>
        </motion.div>

        <motion.div {...motionAnim(0.25)}  className={`${clase} md:grid-cols-3`}>
            <Input {...select_validation} nameId='dni_tipo' label='Tipo DNI' combos={['DNI','L.E','L.C']} />
            <Input {...num_validation} nameId='dni_num' label='N° DNI' />
            <Input {...select_validation} nameId='genero' label='Género' combos={['Masculino','Femenino','Prefiero no decir']} />
        </motion.div>

        <motion.div {...motionAnim(0.3)} className={`${clase} md:grid-cols-2`}>
            <Input {...select_validation} nameId='nac_lugar' label='Lugar de Nacimiento' combos={PROVINCIAS.provincias.sort(sortNombres).map(p=>p.nombre)} />
            <Input {...date_validation} nameId='nac_fecha' label='Fecha de nacimiento' />
        </motion.div>

        <motion.div {...motionAnim(0.35)}  className={`${clase} md:grid-cols-4`}>
            <Input {...text_validation} nameId='dom_calle' label='Domilicio: calle' />
            <Input {...num_validation} nameId='dom_altura' label='Domilicio: altura' />
            <Input {...text_validation} nameId='dom_pisodpto' label='Domilicio: piso - dpto' />
            <Input {...num_validation} nameId='dom_cp' label='Código postal' />
        </motion.div>

        <motion.div {...motionAnim(0.4)} className={`${clase} md:grid-cols-3`}>
            <Input {...select_validation} nameId='prov_nombre' label='Provincia' combos={PROVINCIAS.provincias.sort(sortNombres).map(p=>p.nombre)} onChangeFunc={funcSelProvincia} />
            <Input {...select_validation} nameId='prov_departamento' label='Departamento' combos={DEPARTAMENTOS.departamentos.filter(d=>d.provincia.nombre === selProvincia).sort(sortNombres).map(d=>d.nombre)} />
            <Input {...select_validation} nameId='prov_municipio' label='Municipio' combos={MUNICIPIOS.municipios.filter(m=>m.provincia.nombre === selProvincia).sort(sortNombres).map(m=>m.nombre)} />
        </motion.div>

        <motion.div {...motionAnim(0.45)} className={`${clase} md:grid-cols-2`}>
            <Input {...file_validation} nameId='dni_frente' label='DNI frente' />
            <Input {...file_validation} nameId='dni_atras' label='DNI atrás' />
        </motion.div>
    </div>
}