/**
 * @hidden
 * @internal
 */
export type PpnaQueryType = 'jam' | 'statistic' | 'shortest' | 'pedestrian';
/**
 * https://confluence.2gis.ru/display/TRAFFIC/API+CarRouting+v3%2C+v4#APICarRoutingv3,v4-type
 *
 * @hidden
 * @internal
 */
export interface PpnaQuery {
    type: PpnaQueryType;
    locale: string;
    point_a_name: string;
    point_b_name: string;
    points: Array<{
        /**
         * 'pedo' для начальной и конечной точек
         * 'pref' для промежуточных
         */
        type: 'pedo' | 'pref';
        x: number;
        y: number;
    }>;
}
/**
 * @hidden
 * @internal
 */
export type DirectionType = 'carrouting' | 'pedestrianrouting' | 'ctxrouting';
/**
 * Базовый набор полей маршрута путь
 *
 * @hidden
 * @internal
 */
export interface DirectionBase {
    id: string;
    route_id: string;
    type: DirectionType;
    total_duration: number;
    ui_total_duration: string;
}
/**
 * Result of search for car or pedestrian routing direction.
 */
export interface DirectionResult extends DirectionBase {
    type: 'carrouting' | 'pedestrianrouting';
    algorithm?: string;
    total_distance: number;
    ui_total_distance: UITotalDistance;
    requested_filters?: DirectionRoadType[];
    result_filters?: DirectionRoadType[];
    filter_road_types?: DirectionRoadType[];
    begin_pedestrian_path?: PedestrianPath;
    end_pedestrian_path?: PedestrianPath;
    maneuvers?: Maneuver[];
    waypoints: WayPoint[];
}
/**
 * UI total distance presentation
 */
export interface UITotalDistance {
    unit: string;
    value: string;
}
/**
 * @hidden
 * @internal
 */
type ManeuverType = 'begin' | 'end' | 'crossroad' | 'ringroad' | 'pass_through' | 'turn_over';
/**
 * @hidden
 * @internal
 */
type ManeuverIcon = 'start' | 'finish' | 'crossroad_straight' | 'crossroad_slightly_left' | 'crossroad_left' | 'crossroad_sharply_left' | 'crossroad_sharply_right' | 'crossroad_right' | 'crossroad_slightly_right' | 'ringroad_forward' | 'ringroad_left_45' | 'ringroad_left_90' | 'ringroad_left_135' | 'ringroad_left_180' | 'ringroad_right_45' | 'ringroad_right_90' | 'ringroad_right_135' | 'ringroad_right_180' | 'turn_over_right_hand' | 'turn_over_left_hand' | 'toll_ico';
/**
 * @hidden
 * @internal
 */
type ManeuverTurnDirection = 'straight' | 'slightly_left' | 'left' | 'sharply_left' | 'uturn_right' | 'uturn_left' | 'sharply_right' | 'right' | 'slightly_right';
/**
 * @hidden
 * @internal
 */
export interface Maneuver {
    id: string;
    type: ManeuverType;
    icon: ManeuverIcon;
    comment: string;
    ringroad_exit_number?: number;
    turn_direction?: ManeuverTurnDirection;
    turn_angle?: number;
    outcoming_path_comment: string;
    outcoming_path?: {
        geometry?: Array<{
            selection: string;
            color?: ManeuverOutGeometryColor;
            zlevel?: 'zlevel-normal' | 'zlevel-positive' | 'zlevel-negative';
        }>;
        names: string[];
        duration: number;
        distance: number;
    };
    pass_through?: {
        type: 'main' | 'additional' | 'service';
        payment: 'paid' | 'pass';
        barrier: 'gate' | 'barrier';
        toll: 'toll_type_start' | 'toll_type_end';
        comment?: string;
    };
    geometry?: {
        centroid: string;
        selection?: string;
    };
}
/**
 * Тип дорог маршрута
 *
 * @hidden
 * @internal
 */
export type DirectionRoadType = 'dirt_road' | 'toll_road';
/**
 * Цвет заливки геометрий участка проезда, который идет после совершения маневра.
 *
 * @hidden
 * @internal
 */
export type ManeuverOutGeometryColor = 'fast' | 'normal' | 'slow' | 'slow-jams' | 'ignore' | 'no-traffic';
/**
 * Пеший путь
 *
 * @hidden
 * @internal
 */
export interface PedestrianPath {
    geometry: {
        selection: string;
    };
}
/**
 * @hidden
 * @internal
 */
interface LonLat {
    lon: number;
    lat: number;
}
/**
 * Точка с проекцией на ребро
 *
 * @hidden
 * @internal
 */
export interface WayPoint {
    original_point: LonLat;
    projected_point: LonLat;
    transit: boolean;
}
export {};
