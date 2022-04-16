export interface intervinienteInterface {
    id?: number, 
    contrato_id: number,   
    cliente_id: number,
    propiedad_cantidad: number, 
    tipo_interviniente_id: number,
    create_time?: Date,
    update_time?:Date,
    usuario_id?: number,
    borrado?: boolean,
    nombre?: string,
    apellidos?: string,
    nie?: string,
    tipo_interviniente?:string
    
}