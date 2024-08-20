
export declare function Initialize(): void

export declare function Cast(caster: Player, type: string, orgin: Vector3, direction: number, timestamp: number, PVInstance?: PVInstance, modifer?: any ): void

export declare interface Snapshots {
    GetPlayerAtTime(player: Player, time: number): Map<string, CFrame>
    GetPlayersAtTime(time: number): Map<Player, Map<string, CFrame>>
    GetSnapshotsAtTime(time: number): LuaTuple<[Snapshot?, Snapshot?, number?]>
    CreatePlayersSnapshot(time: number): void
}

export declare interface Settings {
    VoxelSize: number
    VoxelGridSize: Vector3
    SnapshotLifetime: number
    Definitions: number
    SurfaceHardness: Map<Enum.Material, number>
    RicochetHardness: number
    Parts: Array<string>
    PartsSizes: Array<Vector3>
    HitboxSize: Vector3
}

export declare const Snapshots: Snapshots


export declare interface Modifier {
    loss: number
    power: number
    angle: number
    gravity: number
    velocity: number
    lifetime: number
    OnImpact?: BindableEvent
    OnDestroyed?: BindableEvent
    OnIntersection?: BindableEvent
    RaycastFilter?: RaycastParams
    extra: Map<string, any>
}

export declare interface Definition {
    Loss: number
    Power: number
    Angle: number
    Gravity: number
    Velocity: number
    Lifetime: number
    Output?: BindableEvent
    RaycastFilter?: RaycastParams
    OnImpact?: (caster: Player, direction: Vector3, instance: Instance, normal: Vector3, position: Vector3, material: Enum.Material, extra?: Map<string, any>) => void
    OnDestroyed?: (caster: Player, position: Vector3, extra: Map<string, any>) => void
    OnIntersection?: (caster: Player, direction: Vector3, part: string, victim: Player | undefined, position: Vector3, extra: Map<string, any>) => void
}


declare type Grid<T> = Map<Vector3, Map<T, boolean>>

declare interface Record {
    Player?: Player,
	RigType: Enum.HumanoidRigType,
	Parts: Array<CFrame>,
	Position: Vector3,
}

declare interface Snapshot { 
    Time: number,
	Grid: Grid<Model>,
	Records: Map<Model, Record>,
}