var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneButton, PropertyPaneButtonType } from '@microsoft/sp-webpart-base';
import styles from './SvgGhostWebPart.module.scss';
import * as strings from 'SvgGhostWebPartStrings';
//Import the special property pane controls from the PnP SPFx-Property-Controls package
import { PropertyFieldColorPicker } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { PropertyFieldSpinButton } from '@pnp/spfx-property-controls/lib/PropertyFieldSpinButton';
var SvgGhostWebPartWebPart = /** @class */ (function (_super) {
    __extends(SvgGhostWebPartWebPart, _super);
    function SvgGhostWebPartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SvgGhostWebPartWebPart.prototype.render = function () {
        //This will draw the SVG version of the SharePoint PnP Ghost with custom colors
        // You can find the SVG file at https://github.com/thechriskent/PnPMan
        this.domElement.innerHTML = "\n      <div class=\"" + styles.svgGhost + "\">\n        <svg\n            xmlns:osb=\"http://www.openswatchbook.org/uri/2009/osb\"\n            xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n            xmlns:cc=\"http://creativecommons.org/ns#\"\n            xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n            xmlns:svg=\"http://www.w3.org/2000/svg\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n            xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n            width=\"167.223289mm\"\n            height=\"" + this.properties.height + "mm\"\n            viewBox=\"0 0 67.223289 157.28004\"\n            version=\"1.1\"\n            id=\"svg8\"\n            inkscape:version=\"0.92.2 (5c3e80d, 2017-08-06)\"\n            sodipodi:docname=\"PnPMan.svg\">\n          <title\n              id=\"title3738\">SharePoint Patterns and Practices Ghost</title>\n          <defs\n              id=\"defs2\">\n            <linearGradient\n                id=\"linearGradient4571\"\n                osb:paint=\"solid\">\n              <stop\n                  style=\"stop-color:#0072c6;stop-opacity:1;\"\n                  offset=\"0\"\n                  id=\"stop4569\" />\n            </linearGradient>\n          </defs>\n          <sodipodi:namedview\n              id=\"base\"\n              pagecolor=\"#ffffff\"\n              bordercolor=\"#666666\"\n              borderopacity=\"1.0\"\n              inkscape:pageopacity=\"0.0\"\n              inkscape:pageshadow=\"2\"\n              inkscape:zoom=\"0.7\"\n              inkscape:cx=\"151.31995\"\n              inkscape:cy=\"407.70451\"\n              inkscape:document-units=\"mm\"\n              inkscape:current-layer=\"layer8\"\n              showgrid=\"true\"\n              inkscape:window-width=\"1920\"\n              inkscape:window-height=\"1013\"\n              inkscape:window-x=\"1591\"\n              inkscape:window-y=\"-9\"\n              inkscape:window-maximized=\"1\"\n              inkscape:pagecheckerboard=\"true\"\n              showborder=\"false\" />\n          <metadata\n              id=\"metadata5\">\n            <rdf:RDF>\n              <cc:Work\n                  rdf:about=\"\">\n                <dc:format>image/svg+xml</dc:format>\n                <dc:type\n                    rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n                <dc:title>SharePoint Patterns and Practices Ghost</dc:title>\n                <dc:creator>\n                  <cc:Agent>\n                    <dc:title>Chris Kent</dc:title>\n                  </cc:Agent>\n                </dc:creator>\n                <dc:rights>\n                  <cc:Agent>\n                    <dc:title>Do Whatever</dc:title>\n                  </cc:Agent>\n                </dc:rights>\n                <cc:license\n                    rdf:resource=\"\" />\n              </cc:Work>\n            </rdf:RDF>\n          </metadata>\n          \n      <g\n      inkscape:groupmode=\"layer\"\n      id=\"layer4\"\n      inkscape:label=\"Belt\"\n      style=\"display:inline\"\n      transform=\"translate(-83.828052,-24.594358)\">\n    <!--<rect\n        style=\"fill:" + this.properties.colorBelt + ";fill-opacity:1;stroke:none;stroke-width:0.25898856;stroke-opacity:1\"\n        id=\"rect4567\"\n        width=\"29.77\"\n        height=\"4.6772165\"\n        x=\"192.605003\"\n        y=\"127.43362\"\n        ry=\"0.80319941\" />-->\n    <path\n        style=\"display:inline;fill:" + this.properties.colorBuckle + ";fill-opacity:1;stroke:#000000;stroke-width:6;stroke-opacity:1\"\n        d=\"M72.26,141.77c-1.73-23.9,22.54-43.26,13.37-71.49c-13.97-43.01,43.2-63.26,66.86-4.11s7.71,73.54,7.71,73.54\n        s-10.29-13.37-12.34-12.86c-2.06,0.51-4.63,26.23-9.26,16.97s-4.11-25.2-10.8-16.97s-6.17,20.47-12.34,18.98\n        c-6.17-1.49-6.69-23.61-13.89-21.55c-7.2,2.06-4.63,22.27-9.77,21.68c-5.14-0.59-4.11-23.73-6.69-21.16\n        c-2.57,2.57-12.86,21.17-12.86,21.17V141.77z\"\n        id=\"rect4575\"\n        inkscape:connector-curvature=\"0\" />\n        <!--<ellipse transform=\"matrix(0.9603 -0.2788 0.2788 0.9603 -16.4983 32.7989)\" class=\"st1\" cx=\"107.06\" cy=\"74.4\" rx=\"9.26\" ry=\"18.51\"/>\n<ellipse transform=\"matrix(0.944 -0.3298 0.3298 0.944 -15.2005 46.3967)\" class=\"st1\" cx=\"129.13\" cy=\"67.99\" rx=\"9.26\" ry=\"18.51\"/>-->\n  --></g>\n            <g\n                inkscape:groupmode=\"layer\"\n                id=\"layer14\"\n                inkscape:label=\"Font\"\n                style=\"display:none\">\n              <text\n                  xml:space=\"preserve\"\n                  style=\"font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;display:inline;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332\"\n                  x=\"98.760117\"\n                  y=\"105.14783\"\n                  id=\"text4626\"><tspan\n                    sodipodi:role=\"line\"\n                    id=\"tspan4624\"\n                    x=\"98.760117\"\n                    y=\"105.14783\"\n                    style=\"font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:9.17222214px;font-family:'Segoe UI';-inkscape-font-specification:'Segoe UI Bold';fill:#ffffff;stroke-width:0.26458332\">PnP</tspan></text>\n            </g>\n          </g>\n         \n          <g\n              inkscape:groupmode=\"layer\"\n              id=\"layer12\"\n              inkscape:label=\"Hair\"\n              transform=\"translate(-103.828052,-40.594358)\">\n            <path\n                style=\"fill:" + this.properties.colorHair + ";fill-opacity:1;stroke:none;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n                d=\"M136.99,85.11c0,0-7.34-17.16,1.27-21.8c9.49-5.11,16.29,12.07,16.29,12.07s7.43,18.97-0.79,21.97\n                C143.75,101.02,136.99,85.11,136.99,85.11z\"\n                id=\"path4646\"\n                inkscape:connector-curvature=\"0\"\n                sodipodi:nodetypes=\"ccaaccaaascscacccccc\" \n\n<ellipse transform=\"matrix(0.9603 -0.2788 0.2788 0.9603 -16.4983 32.7989)\" class=\"st1\" cx=\"107.06\" cy=\"74.4\" rx=\"9.26\" ry=\"18.51\"/>\n\n          </g>\n\n          <g\n          inkscape:groupmode=\"layer\"\n          id=\"layer12\"\n          inkscape:label=\"Hair\"\n          transform=\"translate(-103.828052,-40.594358)\">\n        <path\n            style=\"fill:" + this.properties.colorHair + ";fill-opacity:1;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n            d=\"M115.21,97.52c0,0-7.96-18.14,1.37-23.05c10.29-5.41,17.66,12.76,17.66,12.76s8.06,20.06-0.86,23.24\n            C122.53,114.34,115.21,97.52,115.21,97.52z\"\n            id=\"path4646\"\n            inkscape:connector-curvature=\"0\"\n            sodipodi:nodetypes=\"ccaaccaaascscacccccc\" \n\n<!--<ellipse transform=\"matrix(0.9603 -0.2788 0.2788 0.9603 -16.4983 32.7989)\" class=\"st1\" cx=\"107.06\" cy=\"74.4\" rx=\"9.26\" ry=\"18.51\"/>\n            \n      </g>\n      <g\n      inkscape:groupmode=\"layer\"\n      id=\"layer9\"\n      inkscape:label=\"Logo\"\n      style=\"display:inline\"\n      transform=\"translate(-73.828052,-54.594358)\">\n\n    <g\n        inkscape:groupmode=\"layer\"\n        id=\"layer1\"\n        inkscape:label=\"Base\"\n        style=\"display:inline\">\n      <path\n          inkscape:connector-curvature=\"0\"\n          id=\"path4616\"\n          d=\"M89.49,97.31c0.92-0.12,3.24,1.76,3.07,3.57c-0.17,1.81-1.69,2.81-3.14,2.83c-1.46,0.01-2.96-1.1-2.91-3.09\n          C86.55,98.64,87.17,97.61,89.49,97.31z\"\n          style=\"display:inline;fill:" + this.properties.colorLogo + ";fill-opacity:1;stroke:none;stroke-width:0.74192154;stroke-opacity:1\" />\n          <path\n          inkscape:connector-curvature=\"0\"\n          id=\"path4616\"\n          d=\"M110.28,84.54c0.92-0.12,3.24,1.76,3.07,3.57c-0.17,1.81-1.69,2.81-3.14,2.83c-1.46,0.01-2.96-1.1-2.91-3.09\n          C107.33,85.87,107.96,84.84,110.28,84.54z\"\n          style=\"display:inline;fill:" + this.properties.colorLogo + ";fill-opacity:1;stroke:none;stroke-width:0.74192154;stroke-opacity:1\" />\n\n    </g>\n\n        </svg>\n      </div>";
    };
    SvgGhostWebPartWebPart.prototype.resetToDefault = function () {
        this.properties.colorSkin = '#ffb900';
        this.properties.colorHair = '#262626';
        this.properties.colorPants = '#d83b01';
        this.properties.colorBelt = '#ffc929';
        this.properties.colorBuckle = '#ffb900';
        this.properties.colorCape = '#003c6c';
        this.properties.colorDiaper = '#262626';
        this.properties.colorShoes = '#0078d7';
        this.properties.colorShirt = '#0078d7';
        this.properties.colorLogo = '#ffffff';
    };
    Object.defineProperty(SvgGhostWebPartWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    SvgGhostWebPartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.SizeGroupName,
                            groupFields: [
                                PropertyFieldSpinButton('height', {
                                    label: strings.HeightFieldLabel,
                                    initialValue: this.properties.height,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    suffix: " mm",
                                    min: 25,
                                    max: 190,
                                    step: 5,
                                    decimalPlaces: 2,
                                    key: 'height'
                                })
                            ]
                        },
                        {
                            groupName: strings.ColorGroupName,
                            groupFields: [
                                PropertyFieldColorPicker('colorHair', {
                                    label: strings.HairFieldLabel,
                                    selectedColor: this.properties.colorHair,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    key: 'colorHair'
                                }),
                                /*PropertyFieldColorPicker('colorSkin', {
                                  label: strings.SkinFieldLabel,
                                  selectedColor: this.properties.colorSkin,
                                  onPropertyChange: this.onPropertyPaneFieldChanged,
                                  properties: this.properties,
                                  key: 'colorSkin'
                                }),
                                PropertyFieldColorPicker('colorCape', {
                                  label: strings.CapeFieldLabel,
                                  selectedColor: this.properties.colorCape,
                                  onPropertyChange: this.onPropertyPaneFieldChanged,
                                  properties: this.properties,
                                  key: 'colorCape'
                                }),
                                PropertyFieldColorPicker('colorShirt', {
                                  label: strings.ShirtFieldLabel,
                                  selectedColor: this.properties.colorShirt,
                                  onPropertyChange: this.onPropertyPaneFieldChanged,
                                  properties: this.properties,
                                  key: 'colorShirt'
                                }),*/
                                PropertyFieldColorPicker('colorLogo', {
                                    label: strings.LogoFieldLabel,
                                    selectedColor: this.properties.colorLogo,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    key: 'colorLogo'
                                }),
                                PropertyFieldColorPicker('colorBuckle', {
                                    label: strings.BuckleFieldLabel,
                                    selectedColor: this.properties.colorBuckle,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    key: 'colorBuckle'
                                }),
                                /*PropertyFieldColorPicker('colorBelt', {
                                  label: strings.BeltFieldLabel,
                                  selectedColor: this.properties.colorBelt,
                                  onPropertyChange: this.onPropertyPaneFieldChanged,
                                  properties: this.properties,
                                  key: 'colorBelt'
                                }),
                                PropertyFieldColorPicker('colorDiaper', {
                                  label: strings.DiaperFieldLabel,
                                  selectedColor: this.properties.colorDiaper,
                                  onPropertyChange: this.onPropertyPaneFieldChanged,
                                  properties: this.properties,
                                  key: 'colorDiaper'
                                }),
                                PropertyFieldColorPicker('colorPants', {
                                  label: strings.PantsFieldLabel,
                                  selectedColor: this.properties.colorPants,
                                  onPropertyChange: this.onPropertyPaneFieldChanged,
                                  properties: this.properties,
                                  key: 'colorPants'
                                }),
                                PropertyFieldColorPicker('colorShoes', {
                                  label: strings.ShoesFieldLabel,
                                  selectedColor: this.properties.colorShoes,
                                  onPropertyChange: this.onPropertyPaneFieldChanged,
                                  properties: this.properties,
                                  key: 'colorShoes'
                                }),*/
                                PropertyPaneButton('reset', {
                                    text: strings.ResetButtonLabel,
                                    buttonType: PropertyPaneButtonType.Command,
                                    icon: 'Warning',
                                    onClick: this.resetToDefault.bind(this)
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return SvgGhostWebPartWebPart;
}(BaseClientSideWebPart));
export default SvgGhostWebPartWebPart;
//# sourceMappingURL=SvgGhostWebPart.js.map