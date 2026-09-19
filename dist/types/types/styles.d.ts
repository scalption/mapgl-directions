import { SectionType } from './formatters';
/**
 * @hidden
 * @internal
 */
export interface SectionStyle {
    color: string;
    borderColor: string;
    border2Color: string;
    hoveredColor: string;
    hoveredBorderColor: string;
    hoveredBorder2Color: string;
}
/**
 * @hidden
 * @internal
 */
export interface PpnaSettings {
    lineStyles: {
        [key in SectionType]: SectionStyle;
    };
}
/**
 * Цвет заливки геометрий участка проезда, который идет после совершения маневра.
 *
 * @hidden
 * @internal
 */
export type ManeuverOutGeometryColor = 'fast' | 'normal' | 'slow' | 'slow-jams' | 'ignore' | 'no-traffic';
/**
 * Тип цветов ППНА
 *
 * @hidden
 * @internal
 */
type PpnaColor = ManeuverOutGeometryColor | 'pedestrian' | 'pedestrian-underground' | 'inactive' | 'border' | 'border2' | 'hovered';
/**
 * @hidden
 * @internal
 */
export type PpnaDefaultColors = {
    [key in PpnaColor]: string;
};
export interface RouteStyle {
    /**
     * Route line width, represents route
     */
    routeLineWidth?: number | InterpolateExpression;
    /**
     * Route substrate width. Will be rendered under route
     */
    substrateLineWidth?: number | InterpolateExpression;
    /**
     * Route halo width. Will be rendered under substrate
     */
    haloLineWidth?: number | InterpolateExpression;
}
/**
 *
 */
export type InterpolateExpression = [
    'interpolate',
    [
        'linear'
    ] | ['exponential', number],
    [
        'zoom'
    ],
    ...number[]
];
export {};
