// Stub loader - passes through source without modification
export default function componentTagger(src, map) {
    const done = this.async();
    // Just pass through without any modifications
    done(null, src, map);
}