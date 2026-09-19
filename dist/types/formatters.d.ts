import { Point } from './types';
import { ManeuverOutGeometryColor, DirectionResult } from './types/navi';
import { PpnaRoute } from './types/formatters';
import { PpnaPoint } from './types/ppnaDrawer';
/**
 * Получает цвет маневра ППНА с фоллбэком на ingnore для неожидаемых нами цветов.
 * Уже был баг, когда Нави добавили новый цвет 'slow-jams' а мы его в конфиге карт не поддержали,
 * геометрия такого маневра отрисовывется с багом.
 *
 * @hidden
 * @internal
 */
export declare function resolvePpnaManeuverColor(color?: ManeuverOutGeometryColor): ManeuverOutGeometryColor;
/**
 * @hidden
 * @internal
 */
export declare function formatPpnaPoints(points: Point[]): PpnaPoint[];
/**
 * @hidden
 * @internal
 */
export declare function formatPpnaRoutes(type: 'ppna' | 'pedestrian', directions: DirectionResult[]): PpnaRoute[];
