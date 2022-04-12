
export interface clienteInterface {
    id?: number,
    nombre: string,
    apellidos: string,
    fecha_nacimiento: Date,
    nie: string,
    email: string,
    tlf: string,
    tlf_movil: string,
    localidad: string,
    direccion: string,
    cp: string,
    usuario_id?: number,
    borrado: boolean

}