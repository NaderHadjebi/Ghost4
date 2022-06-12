import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface ISvgHeroWebPartProps {
    colorPants: string;
    colorHair: string;
    colorBelt: string;
    colorBuckle: string;
    colorSkin: string;
    colorCape: string;
    colorDiaper: string;
    colorShoes: string;
    colorShirt: string;
    colorLogo: string;
    height: number;
}
export default class SvgHeroWebPartWebPart extends BaseClientSideWebPart<ISvgHeroWebPartProps> {
    render(): void;
    private resetToDefault;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SvgHeroWebPart.d.ts.map