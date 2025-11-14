import React, { useState, useEffect, useRef } from 'react';

// TypeScript declaration for the lottie-web library loaded from CDN
declare const lottie: any;
declare const GIF: any;

const initialAnimationJson = `{
  "v": "5.9.0",
  "fr": 29.9700012207031,
  "ip": 0,
  "op": 24.00000097754,
  "w": 1920,
  "h": 1080,
  "nm": "Example Animation",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "rec3",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100, "ix": 11 },
        "r": { "a": 0, "k": 0, "ix": 10 },
        "p": { "a": 0, "k": [1240, 540, 0], "ix": 2, "l": 2 },
        "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 },
        "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ty": "rc",
              "d": 1,
              "s": {
                "a": 1,
                "k": [
                  { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 0, "s": [68, 140] },
                  { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 6, "s": [68, 200] },
                  { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 12, "s": [68, 400] },
                  { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 18, "s": [68, 50] },
                  { "t": 24.00000097754, "s": [68, 140] }
                ],
                "ix": 2
              },
              "p": { "a": 0, "k": [0, 0], "ix": 3 },
              "r": { "a": 0, "k": 20, "ix": 4 },
              "nm": "Rectangle Path 1",
              "mn": "ADBE Vector Shape - Rect",
              "hd": false
            },
            {
              "ty": "fl",
              "c": { "a": 0, "k": [0.0196, 0.7373, 0.102, 1], "ix": 4 },
              "o": { "a": 0, "k": 100, "ix": 5 },
              "r": 1,
              "bm": 0,
              "nm": "Fill 1",
              "mn": "ADBE Vector Graphic - Fill",
              "hd": false
            },
            {
              "ty": "tr",
              "p": { "a": 0, "k": [0, 0], "ix": 2 },
              "a": { "a": 0, "k": [0, 0], "ix": 1 },
              "s": { "a": 0, "k": [100, 100], "ix": 3 },
              "r": { "a": 0, "k": 0, "ix": 6 },
              "o": { "a": 0, "k": 100, "ix": 7 },
              "sk": { "a": 0, "k": 0, "ix": 4 },
              "sa": { "a": 0, "k": 0, "ix": 5 },
              "nm": "Transform"
            }
          ],
          "nm": "Rectangle 1",
          "np": 3,
          "cix": 2,
          "bm": 0,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ],
      "ip": 0,
      "op": 900,
      "st": 0,
      "bm": 0
    },
    {
      "ddd": 0,
      "ind": 2,
      "ty": 4,
      "nm": "rec2",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100, "ix": 11 },
        "r": { "a": 0, "k": 0, "ix": 10 },
        "p": { "a": 0, "k": [1100, 540, 0], "ix": 2, "l": 2 },
        "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 },
        "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ty": "rc",
              "d": 1,
              "s": {
                "a": 1,
                "k": [
                  { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 0, "s": [68, 250] },
                  { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 6, "s": [68, 400] },
                  { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 12, "s": [68, 240] },
                  { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 18, "s": [68, 50] },
                  { "t": 24.00000097754, "s": [68, 240] }
                ],
                "ix": 2
              },
              "p": { "a": 0, "k": [0, 0], "ix": 3 },
              "r": { "a": 0, "k": 20, "ix": 4 },
              "nm": "Rectangle Path 1",
              "mn": "ADBE Vector Shape - Rect",
              "hd": false
            },
            {
              "ty": "fl",
              "c": { "a": 0, "k": [0.0196, 0.7373, 0.102, 1], "ix": 4 },
              "o": { "a": 0, "k": 100, "ix": 5 },
              "r": 1,
              "bm": 0,
              "nm": "Fill 1",
              "mn": "ADBE Vector Graphic - Fill",
              "hd": false
            }
          ],
          "nm": "Rectangle 1",
          "np": 3,
          "cix": 2,
          "bm": 0,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ],
      "ip": 0,
      "op": 900,
      "st": 0,
      "bm": 0
    },
    {
      "ddd": 0,
      "ind": 3,
      "ty": 4,
      "nm": "rec1",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100, "ix": 11 },
        "r": { "a": 0, "k": 0, "ix": 10 },
        "p": { "a": 0, "k": [960, 540, 0], "ix": 2, "l": 2 },
        "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 },
        "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ty": "rc",
              "d": 1,
              "s": {
                "a": 1,
                "k": [
                  { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 0, "s": [68, 400] },
                  { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 6, "s": [68, 240] },
                  { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 12, "s": [68, 50] },
                  { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 18, "s": [68, 240] },
                  { "t": 24.00000097754, "s": [68, 400] }
                ],
                "ix": 2
              },
              "p": { "a": 0, "k": [0, 0], "ix": 3 },
              "r": { "a": 0, "k": 20, "ix": 4 },
              "nm": "Rectangle Path 1",
              "mn": "ADBE Vector Shape - Rect",
              "hd": false
            },
            {
              "ty": "fl",
              "c": { "a": 0, "k": [0.0196, 0.7373, 0.102, 1], "ix": 4 },
              "o": { "a": 0, "k": 100, "ix": 5 },
              "r": 1,
              "bm": 0,
              "nm": "Fill 1",
              "mn": "ADBE Vector Graphic - Fill",
              "hd": false
            }
          ],
          "nm": "Rectangle 1",
          "np": 3,
          "cix": 2,
          "bm": 0,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ],
      "ip": 0,
      "op": 900,
      "st": 0,
      "bm": 0
    }
  ],
  "markers": []
}`;


// --- Helper functions for color override ---

/**
 * Parses a color string (hex or rgb) and returns an array of [r, g, b] values from 0 to 1.
 * @param colorStr The color string to parse.
 * @returns An array of [r, g, b] values, or null if the color string is invalid.
 */
function parseColor(colorStr: string): [number, number, number] | null {
    if (!colorStr) return null;

    let r = 0, g = 0, b = 0;

    let match = colorStr.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (match) {
        r = parseInt(match[1], 16);
        g = parseInt(match[2], 16);
        b = parseInt(match[3], 16);
        return [r / 255, g / 255, b / 255];
    }
    
    match = colorStr.match(/^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i);
    if (match) {
        r = parseInt(match[1] + match[1], 16);
        g = parseInt(match[2] + match[2], 16);
        b = parseInt(match[3] + match[3], 16);
        return [r / 255, g / 255, b / 255];
    }

    match = colorStr.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
    if (match) {
        r = parseInt(match[1], 10);
        g = parseInt(match[2], 10);
        b = parseInt(match[3], 10);
        if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
             return [r / 255, g / 255, b / 255];
        }
    }
    
    return null;
}

/**
 * Recursively traverses Lottie shape items and applies a new color to fills and strokes.
 * @param items The array of Lottie shape items.
 * @param newColorArray The new color as [r, g, b] array.
 */
function applyColorToItems(items: any[], newColorArray: [number, number, number]) {
  if (!items || !Array.isArray(items)) return;

  items.forEach(item => {
    if (item.ty === 'gr') { // Group
      applyColorToItems(item.it, newColorArray);
    } else if (item.ty === 'fl' || item.ty === 'st') { // Fill or Stroke
      if (item.c && typeof item.c.k !== 'undefined') {
        if (item.c.a === 0) { // Static color
          const originalAlpha = item.c.k.length === 4 ? item.c.k[3] : 1;
          item.c.k = [newColorArray[0], newColorArray[1], newColorArray[2], originalAlpha];
        } else { // Animated color
          item.c.k.forEach((keyframe: any) => {
            if (keyframe.s) {
              const originalAlpha = keyframe.s.length === 4 ? keyframe.s[3] : 1;
              keyframe.s = [newColorArray[0], newColorArray[1], newColorArray[2], originalAlpha];
            }
            if (keyframe.e) {
              const originalAlpha = keyframe.e.length === 4 ? keyframe.e[3] : 1;
              keyframe.e = [newColorArray[0], newColorArray[1], newColorArray[2], originalAlpha];
            }
          });
        }
      }
    }
  });
}

/**
 * Applies a color override to an entire Lottie animation data object.
 * @param data The Lottie animation data object.
 * @param newColorArray The new color as [r, g, b] array.
 * @returns A new Lottie animation data object with the color override applied.
 */
function applyColorOverride(data: object | null, newColorArray: [number, number, number]): object | null {
    if (!data) return null;
    const newData = JSON.parse(JSON.stringify(data));

    const processLayers = (layers: any[]) => {
        if (!layers) return;
        layers.forEach(layer => {
            if (layer.shapes) {
                applyColorToItems(layer.shapes, newColorArray);
            }
            if (layer.layers) {
                processLayers(layer.layers);
            }
        });
    };

    processLayers(newData.layers);

    if (newData.assets) {
        newData.assets.forEach((asset: any) => {
            if (asset.layers) {
                processLayers(asset.layers);
            }
        });
    }
  
    return newData;
}


const App: React.FC = () => {
  const [jsonInput, setJsonInput] = useState<string>(initialAnimationJson);
  const [animationData, setAnimationData] = useState<object | null>(() => {
    try {
      return JSON.parse(initialAnimationJson);
    } catch {
      return null;
    }
  });
  const [modifiedAnimationData, setModifiedAnimationData] = useState<object | null>(animationData);
  const [colorOverride, setColorOverride] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const animationContainer = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<number>(0);
  
  const [gifWidth, setGifWidth] = useState<number>(800);
  const [gifHeight, setGifHeight] = useState<number>(800);
  const [scaleMode, setScaleMode] = useState<'cover' | 'contain'>('cover');

  useEffect(() => {
    if (!animationData) {
        setModifiedAnimationData(null);
        return;
    }

    const colorArray = parseColor(colorOverride);

    if (!colorArray) {
        setModifiedAnimationData(animationData);
        return;
    }

    const newAnimationData = applyColorOverride(animationData, colorArray);
    setModifiedAnimationData(newAnimationData);
  }, [animationData, colorOverride]);


  useEffect(() => {
    if (animationContainer.current && modifiedAnimationData) {
       if (typeof lottie === 'undefined') {
        setError('Lottie-web library not loaded. Please check network connection.');
        return;
      }
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: modifiedAnimationData,
      });

      return () => anim.destroy();
    }
  }, [modifiedAnimationData]);

  const handleRender = () => {
    try {
      const data = JSON.parse(jsonInput);
      setAnimationData(data);
      setError(null);
    } catch (e) {
      if (e instanceof Error) {
        setError(`Invalid JSON: ${e.message}`);
      } else {
        setError('An unknown error occurred while parsing JSON.');
      }
      setAnimationData(null);
    }
  };

  const handleJsonInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value);
    try {
        const data = JSON.parse(e.target.value);
        setAnimationData(data);
        setError(null);
      } catch (e) {
        // Don't set error on every keystroke
      }
  };

  const handleDownloadModifiedJson = () => {
    if (!modifiedAnimationData) return;

    const jsonContent = JSON.stringify(modifiedAnimationData, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'modified-animation.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };


  const handleExportGif = async () => {
    if (!modifiedAnimationData || isExporting) return;

    if (typeof lottie === 'undefined') {
      setError('Lottie-web library is not loaded. Please check your network connection.');
      return;
    }
    if (typeof GIF === 'undefined') {
      setError('GIF.js library is not loaded. Please check your network connection.');
      return;
    }

    setIsExporting(true);
    setExportProgress(0);
    setError(null);

    const sourceWidth = (modifiedAnimationData as any).w || 512;
    const sourceHeight = (modifiedAnimationData as any).h || 512;

    const hiddenContainer = document.createElement('div');
    hiddenContainer.style.width = `${sourceWidth}px`;
    hiddenContainer.style.height = `${sourceHeight}px`;
    hiddenContainer.style.position = 'absolute';
    hiddenContainer.style.left = '-9999px';
    document.body.appendChild(hiddenContainer);

    let anim: any;
    let workerUrl: string | null = null;

    const cleanup = () => {
      if (anim) anim.destroy();
      if (document.body.contains(hiddenContainer)) {
        document.body.removeChild(hiddenContainer);
      }
      if (workerUrl) {
        URL.revokeObjectURL(workerUrl);
      }
      setIsExporting(false);
    };

    try {
        const workerResponse = await fetch('https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js');
        if (!workerResponse.ok) {
            throw new Error(`Failed to fetch GIF worker script: ${workerResponse.statusText}`);
        }
        const workerScript = await workerResponse.text();
        const workerBlob = new Blob([workerScript], { type: 'application/javascript' });
        workerUrl = URL.createObjectURL(workerBlob);
    } catch (e) {
        let message = 'Could not download the GIF encoder. Please check your network connection and try again.';
        if (e instanceof Error) {
            message = `${message} Details: ${e.message}`;
        }
        setError(message);
        cleanup();
        return;
    }


    anim = lottie.loadAnimation({
      container: hiddenContainer,
      renderer: 'canvas',
      loop: false,
      autoplay: false,
      animationData: modifiedAnimationData,
    });

    anim.addEventListener('error', () => {
      setError('Failed to load animation for export.');
      cleanup();
    });

    anim.addEventListener('DOMLoaded', () => {
      try {
        const gif = new GIF({
          workers: 4,
          quality: 10,
          width: gifWidth,
          height: gifHeight,
          workerScript: workerUrl!,
        });
        
        const totalFrames = anim.totalFrames;
        const delay = 1000 / anim.frameRate;

        gif.on('progress', (p: number) => {
          setExportProgress(50 + Math.round(p * 50));
        });

        gif.on('finished', (blob: Blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'animation.gif';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          cleanup();
        });

        const frameCanvas = document.createElement('canvas');
        frameCanvas.width = gifWidth;
        frameCanvas.height = gifHeight;
        const frameCtx = frameCanvas.getContext('2d');
        if (!frameCtx) {
            throw new Error("Could not get 2D context from frame canvas");
        }

        let currentFrame = 0;
        const addFrameToGif = () => {
          if (currentFrame >= totalFrames) {
            gif.render();
            return;
          }

          anim.goToAndStop(currentFrame, true);
          const sourceCanvas = hiddenContainer.querySelector('canvas');
          if (sourceCanvas) {
            const sourceAspect = sourceCanvas.width / sourceCanvas.height;
            const targetAspect = gifWidth / gifHeight;
            let drawWidth, drawHeight, dx, dy;

            if (scaleMode === 'cover') {
              if (sourceAspect > targetAspect) {
                  drawHeight = gifHeight;
                  drawWidth = drawHeight * sourceAspect;
                  dx = (gifWidth - drawWidth) / 2;
                  dy = 0;
              } else {
                  drawWidth = gifWidth;
                  drawHeight = drawWidth / sourceAspect;
                  dx = 0;
                  dy = (gifHeight - drawHeight) / 2;
              }
            } else { // 'contain'
              if (sourceAspect > targetAspect) {
                  drawWidth = gifWidth;
                  drawHeight = drawWidth / sourceAspect;
                  dx = 0;
                  dy = (gifHeight - drawHeight) / 2;
              } else {
                  drawHeight = gifHeight;
                  drawWidth = drawHeight * sourceAspect;
                  dx = (gifWidth - drawWidth) / 2;
                  dy = 0;
              }
            }
            
            frameCtx.clearRect(0, 0, gifWidth, gifHeight);
            frameCtx.drawImage(sourceCanvas, dx, dy, drawWidth, drawHeight);
            gif.addFrame(frameCanvas, { copy: true, delay });
          }
          
          setExportProgress(Math.round(((currentFrame + 1) / totalFrames) * 50));
          
          currentFrame++;
          requestAnimationFrame(addFrameToGif);
        };

        addFrameToGif();
      } catch (e) {
        let message = 'An unknown error occurred during GIF export. This is often caused by browser security policies blocking cross-origin workers from the GIF.js CDN.';
        if (e instanceof Error) {
          message = `GIF Export Error: ${e.message}. This might be due to browser security restrictions.`;
        }
        setError(message);
        cleanup();
      }
    });
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center p-4 font-sans">
      <header className="w-full max-w-7xl mb-6 text-center">
        <h1 className="text-4xl font-bold text-cyan-400">Lottie Animation Viewer</h1>
        <p className="text-lg text-gray-400 mt-2">Paste your Lottie JSON below to see it live.</p>
      </header>

      <main className="w-full max-w-7xl flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg p-4">
          <label htmlFor="json-input" className="text-lg font-semibold mb-2 text-gray-300">Lottie JSON Data</label>
          <div className="flex-grow relative">
            <textarea
              id="json-input"
              value={jsonInput}
              onChange={handleJsonInputChange}
              className="w-full h-full min-h-[400px] lg:min-h-0 bg-gray-900 text-gray-200 p-4 rounded-md border-2 border-gray-700 focus:border-cyan-500 focus:ring-cyan-500 transition-colors font-mono text-sm resize-none"
              placeholder="Paste your Lottie JSON here..."
            />
          </div>
          <button
            onClick={handleRender}
            className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500"
          >
            Render Animation
          </button>
        </div>

        <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-300">Preview</h2>
          </div>
          <div className="flex-grow w-full h-full min-h-[400px] lg:min-h-0 bg-gray-900 rounded-md border-2 border-gray-700 flex items-center justify-center overflow-hidden p-2">
            {error ? (
              <div className="text-center text-red-400 p-4">
                <p className="font-bold text-lg">Could not render animation</p>
                <p className="mt-2 font-mono bg-red-900 bg-opacity-50 p-2 rounded">{error}</p>
              </div>
            ) : (
              <div ref={animationContainer} className="w-full h-full"></div>
            )}
          </div>
          
           <div className="mt-4">
            <label htmlFor="color-override" className="block text-sm font-medium text-gray-400">Color Override</label>
            <input
              id="color-override"
              type="text"
              value={colorOverride}
              onChange={(e) => setColorOverride(e.target.value)}
              placeholder="e.g., #FFFFFF or rgb(255, 255, 255)"
              className="mt-1 w-full bg-gray-900 text-gray-200 p-2 rounded-md border-2 border-gray-600 focus:border-cyan-500 focus:ring-cyan-500 transition-colors"
              disabled={!animationData || isExporting}
            />
            <p className="text-xs text-gray-500 mt-1 mb-3">Overrides all shape colors. Leave blank for original colors.</p>
            <button
              onClick={handleDownloadModifiedJson}
              disabled={!modifiedAnimationData || isExporting}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:transform-none"
              title="Download the full Lottie JSON with any color overrides applied."
            >
              Download Modified JSON
            </button>
          </div>
          
          <div className="mt-4">
            <button
              onClick={handleExportGif}
              disabled={isExporting || !animationData}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isExporting ? `Exporting... ${exportProgress}%` : 'Export as GIF'}
            </button>
            {isExporting && (
              <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${exportProgress}%` }}></div>
              </div>
            )}
          </div>
           <div className="mt-4 pt-4 border-t border-gray-700">
            <h3 className="text-md font-semibold text-gray-300 mb-3">Export Settings</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="gif-width" className="block text-sm font-medium text-gray-400">Width (px)</label>
                <input
                  type="number"
                  id="gif-width"
                  value={gifWidth}
                  onChange={(e) => setGifWidth(parseInt(e.target.value, 10) || 0)}
                  className="mt-1 w-full bg-gray-900 text-gray-200 p-2 rounded-md border-2 border-gray-600 focus:border-cyan-500 focus:ring-cyan-500 transition-colors"
                  disabled={isExporting}
                />
              </div>
              <div>
                <label htmlFor="gif-height" className="block text-sm font-medium text-gray-400">Height (px)</label>
                <input
                  type="number"
                  id="gif-height"
                  value={gifHeight}
                  onChange={(e) => setGifHeight(parseInt(e.target.value, 10) || 0)}
                  className="mt-1 w-full bg-gray-900 text-gray-200 p-2 rounded-md border-2 border-gray-600 focus:border-cyan-500 focus:ring-cyan-500 transition-colors"
                  disabled={isExporting}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="scale-mode" className="block text-sm font-medium text-gray-400">Scaling Mode</label>
              <select
                id="scale-mode"
                value={scaleMode}
                onChange={(e) => setScaleMode(e.target.value as 'cover' | 'contain')}
                className="mt-1 w-full bg-gray-900 text-gray-200 p-2 rounded-md border-2 border-gray-600 focus:border-cyan-500 focus:ring-cyan-500 transition-colors"
                disabled={isExporting}
              >
                <option value="cover">Cover (Crop to fit)</option>
                <option value="contain">Contain (Letterbox)</option>
              </select>
            </div>
          </div>
        </div>
      </main>

       <footer className="w-full max-w-7xl mt-8 text-center text-gray-500 text-sm">
         <p>Powered by lottie-web & React</p>
       </footer>
    </div>
  );
};

export default App;
