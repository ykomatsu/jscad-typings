import { io } from "./io";
import { CSG } from "./csg";

export interface StlSerializerOptions extends io.Options {
    binary?: boolean;
}

export interface StlSerializer {
    serialize: (CSGObject: CSG, options?: StlSerializerOptions) => string | ArrayBuffer[];
}
