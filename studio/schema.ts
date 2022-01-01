import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Settings
 *
 *
 */
export interface Settings extends SanityDocument {
  _type: "settings";

  /**
   * Share Card — `image`
   *
   *
   */
  shareCard?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Projects
 *
 *
 */
export interface Projects extends SanityDocument {
  _type: "projects";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Project URL — `url`
   *
   *
   */
  projectUrl?: string;

  /**
   * Repo URL — `url`
   *
   *
   */
  repoUrl?: string;

  /**
   * Technologies — `array`
   *
   *
   */
  technologies?: Array<SanityKeyedReference<Technology>>;

  /**
   * Description — `blockContent`
   *
   *
   */
  description?: BlockContent;
}

/**
 * Technology
 *
 *
 */
export interface Technology extends SanityDocument {
  _type: "technology";

  /**
   * Icon — `image`
   *
   *
   */
  icon?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * URL — `url`
   *
   *
   */
  url?: string;
}

export type BlockContent = Array<
  SanityKeyed<SanityBlock> | SanityKeyed<BlockImage> | SanityKeyed<Code>
>;

export type BlockImage = {
  _type: "blockImage";
  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Alternative Text — `string`
   *
   *
   */
  alt?: string;
};

export type BlockTech = {
  _type: "blockTech";
  /**
   * Tech Array — `array`
   *
   *
   */
  array?: Array<SanityKeyedReference<Technology>>;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
};

export type Documents = Settings | Projects | Technology;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Code = any;
