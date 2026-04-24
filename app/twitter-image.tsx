// Twitter card reuses the Open Graph composition exactly.
import OpengraphImage, {
  alt as ogAlt,
  contentType as ogContentType,
  size as ogSize,
} from "./opengraph-image";

export const runtime = "edge";
export const alt = ogAlt;
export const contentType = ogContentType;
export const size = ogSize;

export default function TwitterImage() {
  return OpengraphImage();
}
