/**
 * @hidden
 * @internal
 */
export type SectionType = 'fast' | 'normal' | 'slow' | 'slow-jams' | 'ignore' | 'no-traffic' | 'pedestrian' | 'pedestrian-underground' | 'inactive';
/**
 * @hidden
 * @internal
 */
export interface PpnaSection {
    type: SectionType;
    geometry: string;
}
/**
 * @hidden
 * @internal
 */
export interface PpnaRoute {
    id: string;
    sections: PpnaSection[];
}
