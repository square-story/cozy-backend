import type { Schema, Struct } from '@strapi/strapi';

export interface DimensionsDimensions extends Struct.ComponentSchema {
  collectionName: 'components_dimensions_dimensions';
  info: {
    displayName: 'dimensions';
    icon: 'grid';
  };
  attributes: {
    Depth: Schema.Attribute.Decimal;
    Height: Schema.Attribute.Decimal;
    Width: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dimensions.dimensions': DimensionsDimensions;
    }
  }
}
