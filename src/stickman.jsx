import { STYLES } from './data';

// Génère le HTML et le CSS à partir des liaisons { accessoire: personnage }.
export function buildCode(linked) {
    const ids = Object.keys(linked);
    const html =
        '<div class="stickman">\n' +
        ids.map((id) => `  <div class="${id}"></div>`).join('\n') +
        (ids.length ? '\n' : '') +
        '</div>';
    const css = ids
        .map((id) => `.${id} {\n  position: absolute;\n  ${STYLES[linked[id]][id].split('\n').join('\n  ')}\n}`)
        .join('\n\n');
    return { html, css };
}

export default function Stickman({ css, linked }) {
    return (
        <div className="stage">
            <style>{css}</style>
            <div className="stickman">
                <div className="sm-head" />
                <div className="sm-body" />
                <div className="sm-arm sm-arm-l" />
                <div className="sm-arm sm-arm-r" />
                <div className="sm-leg sm-leg-l" />
                <div className="sm-leg sm-leg-r" />
                {Object.keys(linked).map((id) => (
                    <div key={id} className={id} />
                ))}
            </div>
        </div>
    );
}
