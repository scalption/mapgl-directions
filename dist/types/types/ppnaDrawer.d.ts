import { PpnaRoute } from './formatters';
import { RouteStyle } from './styles';
/**
 * @hidden
 * @internal
 */
export type Curve = Array<[number, number, number]>;
/**
 * @hidden
 * @internal
 */
export interface PpnaPoint {
    position: number[];
    icon: IconStyle;
    label: LabelStyle;
}
/**
 * @hidden
 * @internal
 */
interface LabelStyle {
    text: string;
    fontSize: number;
    color: string;
}
/**
 * @hidden
 * @internal
 */
interface IconStyle {
    img: string;
    offset: number[];
    size: number[];
}
/**
 * @hidden
 * @internal
 */
export interface Ppna {
    points: PpnaPoint[];
    routes: PpnaRoute[];
    activeRouteId?: string;
    hoveredRouteId?: string;
    style?: RouteStyle;
}
export {};
