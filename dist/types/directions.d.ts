import { DirectionsOptions, CarRouteOptions, PedestrianRouteOptions, DirectionsEventTable } from './types';
import { Evented } from './evented';
/**
 * A class that provides driving direction functionality.
 */
export declare class Directions extends Evented<DirectionsEventTable> {
    private map;
    private options;
    private ppnaDrawer;
    /**
     * Example:
     * ```js
     * const directions = new mapgl.Directions(map, {
     *     directionsApiKey: 'Your Directions API access key',
     * });
     *
     * directions.carRoute({
     *     points: [
     *         [55.2772379, 25.2377810],
     *         [55.2986956, 25.2576546],
     *     ],
     * });
     * ```
     * @param map The map instance.
     * @param options Directions initialization options.
     */
    constructor(map: mapgl.Map, options: DirectionsOptions);
    /**
     * Clears the map from any previously drawn routes.
     */
    clear(): void;
    /**
     * Finds and draws an optimal car route.
     */
    carRoute(options: CarRouteOptions): Promise<void>;
    /**
     * Finds and draws an optimal pedestrian route.
     */
    pedestrianRoute(options: PedestrianRouteOptions): Promise<void>;
    /**
     * @hidden
     * @internal
     */
    private findAndDrawRoute;
    /**
     * @hidden
     * @internal
     */
    private drawRoute;
}
