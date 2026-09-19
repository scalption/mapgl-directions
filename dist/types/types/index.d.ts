import { DirectionResult } from './navi';
import { RouteStyle } from './styles';
/**
 * A geographical point [longitude, latitude].
 */
export type Point = [number, number] | number[];
/**
 * Directions initialization options.
 */
export interface DirectionsOptions {
    /**
     * Directions API access key.
     */
    directionsApiKey: string;
    /**
     * Directions API URL.
     *
     * Example: https://routing.api.2gis.com/carrouting/6.0.0
     *
     * @hidden
     */
    directionsApiUrl?: string;
}
/**
 * Car route method options.
 */
export interface CarRouteOptions {
    /**
     * Array of geographical points [longitude, latitude].
     *
     * You can set up to 10 points.
     */
    points: Point[];
    /**
     * Additional styles for route
     */
    style?: RouteStyle;
}
/**
 * Pedestrian route method options.
 */
export interface PedestrianRouteOptions {
    /**
     * Array of geographical points [longitude, latitude].
     *
     * You can set up to 10 points.
     */
    points: Point[];
    /**
     * Additional styles for route
     */
    style?: RouteStyle;
}
/**
 * @hidden
 * @internal
 */
export interface PpnaRouteOptions {
    type: 'jam' | 'pedestrian';
    points: Point[];
    style?: RouteStyle;
}
/**
 * The list of events that can be emitted by a Directions instance.
 */
export interface DirectionsEventTable {
    /**
     * Emitted when directions is loaded.
     */
    directionsLoaded: DirectionsLoadedEvent;
}
export interface DirectionsLoadedEvent {
    routes: DirectionResult[];
}
