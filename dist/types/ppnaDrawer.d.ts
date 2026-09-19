import { Ppna } from './types/ppnaDrawer';
import { PpnaSettings } from './types/styles';
/**
 * @hidden
 * @internal
 */
export declare class PpnaDrawer {
    private map;
    private settings;
    private polylines;
    private markers;
    private nextPolylinePhase;
    private nextPointPhase;
    private defaultStyle;
    constructor(map: mapgl.Map, config: PpnaSettings);
    draw(ppna: Ppna): void;
    clear(): void;
    private drawPoints;
    private drawRoutes;
    private drawRoute;
    private getNextPolylinePhase;
    private getNextPointPhase;
}
