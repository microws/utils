import { parse, v4 as createGUID } from "uuid";
import { binary_to_base58 } from "base58-js";
import { GuidString } from "@microws/types";

export function createGuidString(): GuidString {
  return binary_to_base58(createGUID({}, Buffer.alloc(16)));
}
