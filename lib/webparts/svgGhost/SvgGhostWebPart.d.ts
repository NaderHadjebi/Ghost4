import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface ISvgGhostWebPartProps {
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
export default class SvgGhostWebPartWebPart extends BaseClientSideWebPart<ISvgGhostWebPartProps> {
    render(): void;
    private resetToDefault;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SvgGhostWebPart.d.ts.map