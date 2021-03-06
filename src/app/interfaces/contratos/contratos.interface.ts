
export interface contratoInterface {
    id?: number,   
    alias: string,
    valor_contrato: number,
    fecha_contrato: Date,
    tipos_contratos_id: number,
    create_time?: Date,
    update_time?:Date,
    usuario_id?: number,
    borrado?: boolean,
    tipo_contrato: string,
    fecha_inicio?: Date,
    fecha_fin?: Date,
    tipo_periodo?: string,
    tipo_periodo_id?:number
    cantidad_periodo?: number
}