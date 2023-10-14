globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/node-fetch-native@1.4.0/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, isEvent, createEvent, getRequestHeader, splitCookiesString, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, lazyEventHandler, getQuery as getQuery$1, getCookie, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, getResponseStatusText } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/h3@1.8.2/node_modules/h3/dist/index.mjs';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/vue-bundle-renderer@2.0.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/devalue@4.3.2/node_modules/devalue/index.js';
import { renderToString } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { renderSSRHead } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/@unhead+ssr@1.7.4/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/destr@2.0.1/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/unenv@1.7.4/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import defu, { defuFn, defu as defu$1 } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash, isRelative } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/ufo@1.3.1/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/unstorage@1.9.0/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/unstorage@1.9.0/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/radix3@1.1.0/node_modules/radix3/dist/index.mjs';
import { getHighlighter, loadWasm } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/shikiji@0.6.10/node_modules/shikiji/dist/index.mjs';
import { extname } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/pathe@1.1.1/node_modules/pathe/dist/index.mjs';
import { unified } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/unified@11.0.3/node_modules/unified/index.js';
import { toString } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/index.js';
import { postprocess, preprocess } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/dev/index.js';
import { stringifyPosition } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/index.js';
import { markdownLineEnding, markdownSpace } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/micromark-util-character@2.0.1/node_modules/micromark-util-character/dev/index.js';
import { push, splice } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/micromark-util-chunked@2.0.0/node_modules/micromark-util-chunked/dev/index.js';
import { resolveAll } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/micromark-util-resolve-all@2.0.0/node_modules/micromark-util-resolve-all/index.js';
import { normalizeUri } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.0/node_modules/micromark-util-sanitize-uri/dev/index.js';
import slugify from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/slugify@1.6.6/node_modules/slugify/slugify.js';
import remarkParse from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/remark-parse@10.0.2/node_modules/remark-parse/index.js';
import remark2rehype from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/index.js';
import remarkMDC, { parseFrontMatter } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/remark-mdc@2.0.0/node_modules/remark-mdc/dist/index.mjs';
import { toString as toString$1 } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/hast-util-to-string@3.0.0/node_modules/hast-util-to-string/index.js';
import Slugger from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/github-slugger@2.0.0/node_modules/github-slugger/index.js';
import { detab } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/detab@3.0.2/node_modules/detab/index.js';
import remarkEmoji from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/remark-emoji@4.0.0/node_modules/remark-emoji/index.js';
import remarkGFM from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js';
import rehypeExternalLinks from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/rehype-external-links@3.0.0/node_modules/rehype-external-links/index.js';
import rehypeSortAttributeValues from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/rehype-sort-attribute-values@5.0.0/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/rehype-sort-attributes@5.0.0/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/rehype-raw@6.1.1/node_modules/rehype-raw/index.js';
import { visit } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/index.js';
import { version, unref } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { createServerHead as createServerHead$1 } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/unhead@1.7.4/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/@unhead+shared@1.7.4/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),t=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return t()[o]??r[o]},has(e,o){const i=t();return o in i||o in r},set(e,o,i){const p=t(!0);return p[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=t(!0);return delete i[o],!0},ownKeys(){const e=t(!0);return Object.keys(e)}}),E=typeof process<"u"&&process.env&&"development"||"",d=[["APPVEYOR"],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"]];function B(){if(globalThis.process?.env)for(const e of d){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const I=B(),U=I.name;function n(e){return e?e!=="false":!1}const l=globalThis.process?.platform||"",T=n(s.CI)||I.ci!==!1,a=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const c=E==="test"||n(s.TEST);n(s.MINIMAL)||T||c||!a;const C=/^win/i.test(l);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||C&&s.TERM!=="dumb"||a&&s.TERM&&s.TERM==="dumb"||T);const R=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(R?.split(".")[0])||null;const Y=globalThis.process||Object.create(null),L={versions:{}};new Proxy(Y,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in L)return L[o]}});const _=!!globalThis.Netlify,O=!!globalThis.EdgeRuntime,D=globalThis.navigator?.userAgent==="Cloudflare-Workers",A=!!globalThis.Deno,u=!!globalThis.__lagon__,N=globalThis.process?.release?.name==="node",S=!!globalThis.Bun||!!globalThis.process?.versions?.bun,b=!!globalThis.fastly,K=[[_,"netlify"],[O,"edge-light"],[D,"workerd"],[A,"deno"],[u,"lagon"],[N,"node"],[S,"bun"],[b,"fastly"]];function F(){const e=K.find(o=>o[0]);if(e)return {name:e[1]}}const g=F();g?.name||"";

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  docus: {
    title: "Docus",
    description: "The best place to start your documentation.",
    url: "https://docus.dev",
    image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {},
    layout: "default",
    header: {
      title: "",
      logo: false,
      showLinkIcon: false,
      fluid: false,
      exclude: []
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    footer: {
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev"
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
    github: {
      dir: void 0,
      branch: void 0,
      repo: void 0,
      owner: void 0,
      edit: false
    }
  }
});

const appConfig1 = defineAppConfig({
  prose: {
    copyButton: {
      iconCopy: "ph:copy",
      iconCopied: "ph:check"
    },
    headings: {
      icon: "ph:link"
    }
  }
});

const appConfig2 = defineAppConfig({});

const inlineAppConfig = {
  "nuxt": {}
};

const appConfig = defuFn(appConfig0, appConfig1, appConfig2, inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/api/search": {
        "prerender": true,
        "cache": true
      }
    }
  },
  "public": {
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "p": "prose-p",
          "a": "prose-a",
          "blockquote": "prose-blockquote",
          "code-inline": "prose-code-inline",
          "code": "ProseCodeInline",
          "em": "prose-em",
          "h1": "prose-h1",
          "h2": "prose-h2",
          "h3": "prose-h3",
          "h4": "prose-h4",
          "h5": "prose-h5",
          "h6": "prose-h6",
          "hr": "prose-hr",
          "img": "prose-img",
          "ul": "prose-ul",
          "ol": "prose-ol",
          "li": "prose-li",
          "strong": "prose-strong",
          "table": "prose-table",
          "thead": "prose-thead",
          "tbody": "prose-tbody",
          "td": "prose-td",
          "th": "prose-th",
          "tr": "prose-tr"
        }
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    },
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": "",
      "experimental": {
        "stripQueryParameters": false,
        "advanceQuery": false,
        "clientDB": false
      },
      "respectPathCase": false,
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": [
          "icon",
          "titleTemplate",
          "header",
          "main",
          "aside",
          "footer",
          "layout"
        ]
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": {
        "theme": {
          "dark": "github-dark",
          "default": "github-light"
        },
        "preload": [
          "json",
          "js",
          "ts",
          "html",
          "css",
          "vue",
          "diff",
          "shell",
          "markdown",
          "yaml",
          "bash",
          "ini"
        ]
      },
      "wsUrl": "ws://localhost:4000/",
      "documentDriven": {
        "page": true,
        "navigation": true,
        "surround": true,
        "globals": {},
        "layoutFallbacks": [
          "theme"
        ],
        "injectPage": true
      },
      "host": "",
      "trailingSlash": false,
      "contentHead": true,
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      }
    }
  },
  "pinceau": {
    "studio": true,
    "outputDir": "/Users/keqing/Code/English-for-Technical-Interviews/.nuxt/pinceau/"
  },
  "mdc": {
    "highlight": {
      "theme": {
        "dark": "github-dark",
        "default": "github-light"
      },
      "preload": [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini"
      ],
      "wrapperStyle": ""
    }
  },
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "4q9TnkKRqO",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [],
    "locales": [],
    "defaultLocale": "",
    "highlight": {
      "theme": {
        "dark": "github-dark",
        "default": "github-light"
      },
      "preload": [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini"
      ]
    },
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      },
      "remarkPlugins": {},
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": [
        "icon",
        "titleTemplate",
        "header",
        "main",
        "aside",
        "footer",
        "layout"
      ]
    },
    "contentHead": true,
    "documentDriven": true,
    "respectPathCase": false,
    "experimental": {
      "clientDB": false,
      "stripQueryParameters": false,
      "advanceQuery": false
    }
  },
  "appConfigSchema": {
    "properties": {
      "id": "#appConfig",
      "properties": {
        "nuxtIcon": {
          "title": "Nuxt Icon",
          "description": "Configure the defaults of Nuxt Icon",
          "id": "#appConfig/nuxtIcon",
          "properties": {
            "size": {
              "title": "Icon Size",
              "description": "Set the default icon size. Set to false to disable the sizing of icon in style.",
              "tags": [
                "@studioIcon material-symbols:format-size-rounded"
              ],
              "tsType": "string | false",
              "id": "#appConfig/nuxtIcon/size",
              "default": "1em",
              "type": "string"
            },
            "class": {
              "title": "CSS Class",
              "description": "Set the default CSS class",
              "tags": [
                "@studioIcon material-symbols:css"
              ],
              "id": "#appConfig/nuxtIcon/class",
              "default": "",
              "type": "string"
            },
            "aliases": {
              "title": "Icon aliases",
              "description": "Define Icon aliases to update them easily without code changes.",
              "tags": [
                "@studioIcon material-symbols:star-rounded",
                "@studioInputObjectValueType icon"
              ],
              "tsType": "{ [alias: string]: string }",
              "id": "#appConfig/nuxtIcon/aliases",
              "default": {},
              "type": "object"
            }
          },
          "type": "object",
          "default": {
            "size": "1em",
            "class": "",
            "aliases": {}
          }
        },
        "prose": {
          "title": "Prose configuration from Nuxt Typography",
          "description": "",
          "tags": [
            "@studioIcon material-symbols:short-text-rounded",
            "@studioInput icon"
          ],
          "id": "#appConfig/prose",
          "properties": {
            "copyButton": {
              "title": "Copy button (used in code blocks)",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:content-copy"
              ],
              "id": "#appConfig/prose/copyButton",
              "properties": {
                "iconCopy": {
                  "title": "Icon displayed to copy",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/prose/copyButton/iconCopy",
                  "default": "ph:copy",
                  "type": "string"
                },
                "iconCopied": {
                  "title": "Icon displayed when copied",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/prose/copyButton/iconCopied",
                  "default": "ph:check",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "iconCopy": "ph:copy",
                "iconCopied": "ph:check"
              }
            },
            "headings": {
              "title": "Default configuration for all headings (h1, h2, h3, h4, h5 and h6)",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:title"
              ],
              "id": "#appConfig/prose/headings",
              "properties": {
                "icon": {
                  "title": "Default icon for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/headings/icon",
                  "default": "ph:link",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": "ph:link"
              }
            },
            "h1": {
              "title": "First heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h1"
              ],
              "id": "#appConfig/prose/h1",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h1/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h2": {
              "title": "Second heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h2"
              ],
              "id": "#appConfig/prose/h2",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h2/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h3": {
              "title": "Third heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h3"
              ],
              "id": "#appConfig/prose/h3",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h3/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h4": {
              "title": "Fourth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h4"
              ],
              "id": "#appConfig/prose/h4",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h4/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h5": {
              "title": "Fifth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h5"
              ],
              "id": "#appConfig/prose/h5",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h5/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h6": {
              "title": "Sixth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h6"
              ],
              "id": "#appConfig/prose/h6",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h6/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            }
          },
          "type": "object",
          "default": {
            "copyButton": {
              "iconCopy": "ph:copy",
              "iconCopied": "ph:check"
            },
            "headings": {
              "icon": "ph:link"
            },
            "h1": {
              "icon": ""
            },
            "h2": {
              "icon": ""
            },
            "h3": {
              "icon": ""
            },
            "h4": {
              "icon": ""
            },
            "h5": {
              "icon": ""
            },
            "h6": {
              "icon": ""
            }
          }
        },
        "docus": {
          "title": "Docus theme configuration.",
          "description": "",
          "tags": [
            "@studioIcon material-symbols:docs"
          ],
          "id": "#appConfig/docus",
          "properties": {
            "title": {
              "title": "Website title, used as header default title and meta title.",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:title"
              ],
              "id": "#appConfig/docus/title",
              "default": "Docus",
              "type": "string"
            },
            "titleTemplate": {
              "title": "The website title template, to overwrite the default one.",
              "description": "",
              "tags": [],
              "id": "#appConfig/docus/titleTemplate",
              "default": "%s · Docus",
              "type": "string"
            },
            "description": {
              "title": "Website description, used for meta description.",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:description"
              ],
              "id": "#appConfig/docus/description",
              "default": "The best place to start your documentation.",
              "type": "string"
            },
            "image": {
              "title": "Cover image.",
              "description": "",
              "tags": [
                "@example '/cover.jpg'",
                "@studioIcon dashicons:cover-image",
                "@studioInput file"
              ],
              "id": "#appConfig/docus/image",
              "default": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
              "type": "string"
            },
            "socials": {
              "title": "Social links",
              "description": "Will be used in AppSocialIcons component.",
              "tags": [
                "@studioIcon material-symbols:share-outline"
              ],
              "id": "#appConfig/docus/socials",
              "properties": {
                "twitter": {
                  "title": "Twitter social handle",
                  "description": "",
                  "tags": [
                    "@example 'nuxt_js'",
                    "@studioIcon simple-icons:twitter"
                  ],
                  "id": "#appConfig/docus/socials/twitter",
                  "default": "",
                  "type": "string"
                },
                "github": {
                  "title": "GitHub org or repository",
                  "description": "",
                  "tags": [
                    "@example 'nuxt/framework'",
                    "@studioIcon simple-icons:github"
                  ],
                  "id": "#appConfig/docus/socials/github",
                  "default": "",
                  "type": "string"
                },
                "facebook": {
                  "title": "Facebook page url",
                  "description": "",
                  "tags": [
                    "@example https://www.facebook.com/groups/nuxtjs",
                    "@studioIcon simple-icons:facebook"
                  ],
                  "id": "#appConfig/docus/socials/facebook",
                  "default": "",
                  "type": "string"
                },
                "instagram": {
                  "title": "Instagram page url",
                  "description": "",
                  "tags": [
                    "@example https://www.instagram.com/wearenuxt",
                    "@studioIcon simple-icons:instagram"
                  ],
                  "id": "#appConfig/docus/socials/instagram",
                  "default": "",
                  "type": "string"
                },
                "tiktok": {
                  "title": "Instagram page url",
                  "description": "",
                  "tags": [
                    "@example https://www.youtube.com/@NuxtLabs",
                    "@studioIcon simple-icons:youtube"
                  ],
                  "id": "#appConfig/docus/socials/tiktok",
                  "default": "",
                  "type": "string"
                },
                "youtube": {
                  "title": "TikTok page url",
                  "description": "",
                  "tags": [
                    "@example https://www.tiktok.com/@tiktok",
                    "@studioIcon simple-icons:tiktok"
                  ],
                  "id": "#appConfig/docus/socials/youtube",
                  "default": "",
                  "type": "string"
                },
                "medium": {
                  "title": "Medium page url",
                  "description": "",
                  "tags": [
                    "@example https://medium.com/nuxt",
                    "@studioIcon simple-icons:medium"
                  ],
                  "id": "#appConfig/docus/socials/medium",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "twitter": "",
                "github": "",
                "facebook": "",
                "instagram": "",
                "tiktok": "",
                "youtube": "",
                "medium": ""
              }
            },
            "layout": {
              "title": "Theme layout configuration.",
              "description": "",
              "tags": [
                "@studioIcon tabler:arrow-autofit-width"
              ],
              "tsType": "'default'|'page'",
              "id": "#appConfig/docus/layout",
              "default": "default",
              "type": "string"
            },
            "aside": {
              "title": "Aside navigation configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-page-24-regular"
              ],
              "id": "#appConfig/docus/aside",
              "properties": {
                "level": {
                  "title": "Aside navigation level",
                  "description": "Use 0 to disable all nesting. Use 1 and more to display nested navigation in header and aside navigation.",
                  "tags": [],
                  "id": "#appConfig/docus/aside/level",
                  "default": 0,
                  "type": "number"
                },
                "collapsed": {
                  "title": "Specify if default collapsibles state globally for aside navigation.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/aside/collapsed",
                  "default": false,
                  "type": "boolean"
                },
                "exclude": {
                  "title": "Paths to be excluded from aside navigation.",
                  "description": "",
                  "tags": [],
                  "tsType": "string[]",
                  "id": "#appConfig/docus/aside/exclude",
                  "default": [],
                  "type": "array",
                  "items": {
                    "type": "any"
                  }
                }
              },
              "type": "object",
              "default": {
                "level": 0,
                "collapsed": false,
                "exclude": []
              }
            },
            "header": {
              "title": "Header configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-header-24-regular"
              ],
              "id": "#appConfig/docus/header",
              "properties": {
                "title": {
                  "title": "Website title",
                  "description": "Title to be displayed in header or as aria-label if logo is defined.\nDefault to docus.title",
                  "tags": [
                    "@studioIcon material-symbols:title"
                  ],
                  "id": "#appConfig/docus/header/title",
                  "default": "",
                  "type": "string"
                },
                "logo": {
                  "title": "Logo configuration",
                  "description": "Boolean to disable or use the `Logo.vue` component.\nString to be used as a name of a component.\nObject that sets the light and dark logos.",
                  "tags": [
                    "@example 'MyLogo'",
                    "@studioInput boolean"
                  ],
                  "tsType": "boolean|string|{dark: string, light: string}",
                  "id": "#appConfig/docus/header/logo",
                  "default": false,
                  "type": "boolean"
                },
                "showLinkIcon": {
                  "title": "Header links",
                  "description": "Toggle links icons in the header.",
                  "tags": [],
                  "id": "#appConfig/docus/header/showLinkIcon",
                  "default": false,
                  "type": "boolean"
                },
                "exclude": {
                  "title": "Paths to be excluded from header links.",
                  "description": "",
                  "tags": [],
                  "tsType": "string[]",
                  "id": "#appConfig/docus/header/exclude",
                  "default": [],
                  "type": "array",
                  "items": {
                    "type": "any"
                  }
                },
                "fluid": {
                  "title": "Makes the content of the header fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/header/fluid",
                  "default": false,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "title": "",
                "logo": false,
                "showLinkIcon": false,
                "exclude": [],
                "fluid": false
              }
            },
            "main": {
              "title": "Main content configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-header-footer-24-filled"
              ],
              "id": "#appConfig/docus/main",
              "properties": {
                "fluid": {
                  "title": "Makes the content of the main container fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/main/fluid",
                  "default": false,
                  "type": "boolean"
                },
                "padded": {
                  "title": "Makes the content of the main container padded.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/main/padded",
                  "default": true,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "fluid": false,
                "padded": true
              }
            },
            "footer": {
              "title": "Footer configuration",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-footer-24-regular"
              ],
              "id": "#appConfig/docus/footer",
              "properties": {
                "credits": {
                  "title": "Website credits configuration.",
                  "description": "",
                  "tags": [
                    "@studioIcon material-symbols:copyright"
                  ],
                  "tsType": "false|{icon: string, text: string, href: string}",
                  "id": "#appConfig/docus/footer/credits",
                  "properties": {
                    "icon": {
                      "title": "Icon to show on credits",
                      "description": "",
                      "tags": [
                        "@formtype Icon"
                      ],
                      "id": "#appConfig/docus/footer/credits/icon",
                      "default": "IconDocus",
                      "type": "string"
                    },
                    "text": {
                      "type": "string",
                      "id": "#appConfig/docus/footer/credits/text",
                      "default": "Powered by Docus"
                    },
                    "href": {
                      "type": "string",
                      "id": "#appConfig/docus/footer/credits/href",
                      "default": "https://docus.dev"
                    }
                  },
                  "type": "object",
                  "default": {
                    "icon": "IconDocus",
                    "text": "Powered by Docus",
                    "href": "https://docus.dev"
                  }
                },
                "textLinks": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "text",
                      "href"
                    ],
                    "properties": {
                      "href": {
                        "type": "string",
                        "description": "URL when clicking the link"
                      },
                      "text": {
                        "type": "string",
                        "description": "Text of the link"
                      },
                      "target": {
                        "type": "string",
                        "description": "Target attribute of the link"
                      },
                      "rel": {
                        "type": "string",
                        "description": "Rel attribute of the link"
                      }
                    }
                  },
                  "title": "Text links",
                  "description": "Will be added into center section of the footer.",
                  "tags": [
                    "@studioIcon material-symbols:add-link"
                  ],
                  "id": "#appConfig/docus/footer/textLinks"
                },
                "iconLinks": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "icon",
                      "href"
                    ],
                    "properties": {
                      "icon": {
                        "type": "string",
                        "description": "Icon name"
                      },
                      "href": {
                        "type": "string",
                        "description": "Link when clicking on the icon"
                      },
                      "label": {
                        "type": "string",
                        "description": "Label of the icon"
                      },
                      "rel": {
                        "type": "string",
                        "description": "Rel attribute of the link"
                      }
                    }
                  },
                  "title": "Icon links",
                  "description": "Icons to be added to Social Icons in footer.",
                  "tags": [
                    "@studioIcon material-symbols:add-link"
                  ],
                  "id": "#appConfig/docus/footer/iconLinks"
                },
                "fluid": {
                  "title": "Makes the content of the footer fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/footer/fluid",
                  "default": true,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "credits": {
                  "icon": "IconDocus",
                  "text": "Powered by Docus",
                  "href": "https://docus.dev"
                },
                "fluid": true
              }
            },
            "github": {
              "title": "GitHub integration",
              "description": "Configure the Edit on Github integration.",
              "tags": [
                "@studioIcon simple-icons:github"
              ],
              "id": "#appConfig/docus/github",
              "properties": {
                "baseUrl": {
                  "title": "Base URL",
                  "description": "You can use this to link to GitHub Enterprise.",
                  "tags": [],
                  "id": "#appConfig/docus/github/baseUrl",
                  "default": "https://github.com",
                  "type": "string"
                },
                "dir": {
                  "title": "Directory",
                  "description": "Your GitHub repository root directory.",
                  "tags": [],
                  "id": "#appConfig/docus/github/dir",
                  "default": "",
                  "type": "string"
                },
                "branch": {
                  "title": "Branch",
                  "description": "Your GitHub repository branch.",
                  "tags": [],
                  "id": "#appConfig/docus/github/branch",
                  "default": "",
                  "type": "string"
                },
                "repo": {
                  "title": "Repository",
                  "description": "Your GitHub repository name.",
                  "tags": [],
                  "id": "#appConfig/docus/github/repo",
                  "default": "",
                  "type": "string"
                },
                "owner": {
                  "title": "Owner",
                  "description": "Your GitHub repository owner.",
                  "tags": [],
                  "id": "#appConfig/docus/github/owner",
                  "default": "",
                  "type": "string"
                },
                "edit": {
                  "title": "EditOnGithub",
                  "description": "Display EditOnGithub button.",
                  "tags": [],
                  "id": "#appConfig/docus/github/edit",
                  "default": false,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "baseUrl": "https://github.com",
                "dir": "",
                "branch": "",
                "repo": "",
                "owner": "",
                "edit": false
              }
            }
          },
          "type": "object",
          "default": {
            "title": "Docus",
            "titleTemplate": "%s · Docus",
            "description": "The best place to start your documentation.",
            "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
            "socials": {
              "twitter": "",
              "github": "",
              "facebook": "",
              "instagram": "",
              "tiktok": "",
              "youtube": "",
              "medium": ""
            },
            "layout": "default",
            "aside": {
              "level": 0,
              "collapsed": false,
              "exclude": []
            },
            "header": {
              "title": "",
              "logo": false,
              "showLinkIcon": false,
              "exclude": [],
              "fluid": false
            },
            "main": {
              "fluid": false,
              "padded": true
            },
            "footer": {
              "credits": {
                "icon": "IconDocus",
                "text": "Powered by Docus",
                "href": "https://docus.dev"
              },
              "fluid": true
            },
            "github": {
              "baseUrl": "https://github.com",
              "dir": "",
              "branch": "",
              "repo": "",
              "owner": "",
              "edit": false
            }
          }
        }
      },
      "type": "object",
      "default": {
        "nuxtIcon": {
          "size": "1em",
          "class": "",
          "aliases": {}
        },
        "prose": {
          "copyButton": {
            "iconCopy": "ph:copy",
            "iconCopied": "ph:check"
          },
          "headings": {
            "icon": "ph:link"
          },
          "h1": {
            "icon": ""
          },
          "h2": {
            "icon": ""
          },
          "h3": {
            "icon": ""
          },
          "h4": {
            "icon": ""
          },
          "h5": {
            "icon": ""
          },
          "h6": {
            "icon": ""
          }
        },
        "docus": {
          "title": "Docus",
          "titleTemplate": "%s · Docus",
          "description": "The best place to start your documentation.",
          "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
          "socials": {
            "twitter": "",
            "github": "",
            "facebook": "",
            "instagram": "",
            "tiktok": "",
            "youtube": "",
            "medium": ""
          },
          "layout": "default",
          "aside": {
            "level": 0,
            "collapsed": false,
            "exclude": []
          },
          "header": {
            "title": "",
            "logo": false,
            "showLinkIcon": false,
            "exclude": [],
            "fluid": false
          },
          "main": {
            "fluid": false,
            "padded": true
          },
          "footer": {
            "credits": {
              "icon": "IconDocus",
              "text": "Powered by Docus",
              "href": "https://docus.dev"
            },
            "fluid": true
          },
          "github": {
            "baseUrl": "https://github.com",
            "dir": "",
            "branch": "",
            "repo": "",
            "owner": "",
            "edit": false
          }
        }
      }
    },
    "default": {
      "nuxtIcon": {
        "size": "1em",
        "class": "",
        "aliases": {}
      },
      "prose": {
        "copyButton": {
          "iconCopy": "ph:copy",
          "iconCopied": "ph:check"
        },
        "headings": {
          "icon": "ph:link"
        },
        "h1": {
          "icon": ""
        },
        "h2": {
          "icon": ""
        },
        "h3": {
          "icon": ""
        },
        "h4": {
          "icon": ""
        },
        "h5": {
          "icon": ""
        },
        "h6": {
          "icon": ""
        }
      },
      "docus": {
        "title": "Docus",
        "titleTemplate": "%s · Docus",
        "description": "The best place to start your documentation.",
        "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
        "socials": {
          "twitter": "",
          "github": "",
          "facebook": "",
          "instagram": "",
          "tiktok": "",
          "youtube": "",
          "medium": ""
        },
        "layout": "default",
        "aside": {
          "level": 0,
          "collapsed": false,
          "exclude": []
        },
        "header": {
          "title": "",
          "logo": false,
          "showLinkIcon": false,
          "exclude": [],
          "fluid": false
        },
        "main": {
          "fluid": false,
          "padded": true
        },
        "footer": {
          "credits": {
            "icon": "IconDocus",
            "text": "Powered by Docus",
            "href": "https://docus.dev"
          },
          "fluid": true
        },
        "github": {
          "baseUrl": "https://github.com",
          "dir": "",
          "branch": "",
          "repo": "",
          "owner": "",
          "edit": false
        }
      }
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/keqing/Code/English-for-Technical-Interviews/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('pinceau', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/keqing/Code/English-for-Technical-Interviews/.nuxt/pinceau/theme","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('content:source:content', unstorage_47drivers_47fs({"name":"content:source:content","driver":"fs","base":"/Users/keqing/Code/English-for-Technical-Interviews/content","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache:content', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/keqing/Code/English-for-Technical-Interviews/.nuxt/content-cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/keqing/Code/English-for-Technical-Interviews","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/keqing/Code/English-for-Technical-Interviews/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/keqing/Code/English-for-Technical-Interviews/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/keqing/Code/English-for-Technical-Interviews/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/keqing/Code/English-for-Technical-Interviews/.data/kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && entry.value) {
      _resolvePromise.catch((error) => {
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.path.endsWith("/favicon.ico")) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

const nitro = (async function(nitro) {
  nitro.hooks.hook("render:html", async (htmlContext, { event }) => {
    const theme = await useStorage().getItem("pinceau:index.css");
    const pinceauContent = event?.pinceauContent || { theme: void 0, runtime: void 0 };
    if (!theme?.runtime) {
      htmlContext.head.splice(2, 0, `<style id="pinceau-runtime-hydratable">${pinceauContent.runtime}</style>`);
    }
    if (!theme?.theme) {
      htmlContext.head.splice(2, 0, `<style id="pinceau-theme">${theme}</style>`);
    }
  });
});

const script = "\"use strict\";(()=>{const a=window,e=document.documentElement,m=[\"dark\",\"light\"],c=window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let n=c===\"system\"?f():c;const l=e.getAttribute(\"data-color-mode-forced\");l&&(n=l),i(n),a[\"__NUXT_COLOR_MODE__\"]={preference:c,value:n,getColorScheme:f,addColorScheme:i,removeColorScheme:d};function i(o){const t=\"\"+o+\"\",s=\"theme\";e.classList?e.classList.add(t):e.className+=\" \"+t,s&&e.setAttribute(\"data-\"+s,o)}function d(o){const t=\"\"+o+\"\",s=\"theme\";e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(t,\"g\"),\"\"),s&&e.removeAttribute(\"data-\"+s)}function r(o){return a.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function f(){if(a.matchMedia&&r(\"\").media!==\"not all\"){for(const o of m)if(r(\":\"+o).matches)return o}return\"light\"}})();\n";

const _CeZO7xOAlS = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  nitro,
_CeZO7xOAlS
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const useShikiHighlighter = createSingleton((opts) => {
  const { theme, preload, wrapperStyle } = opts || {};
  let promise;
  const getShikiHighlighter = () => {
    if (!promise) {
      promise = getHighlighter({
        themes: [
          theme?.default || theme || "dark-plus"
        ],
        langs: [
          ...preload || [],
          "diff",
          "json",
          "js",
          "ts",
          "css",
          "shell",
          "html",
          "md",
          "yaml",
          "vue",
          "mdc"
        ]
      }).then((highlighter) => {
        const themes = Object.values(typeof theme === "string" ? { default: theme } : theme || {});
        if (themes.length) {
          return Promise.all(themes.map((theme2) => highlighter.loadTheme(theme2))).then(() => highlighter);
        }
        return highlighter;
      });
    }
    return promise;
  };
  const getHighlightedAST = async (code, lang, theme2, opts2) => {
    try {
      const highlighter = await getShikiHighlighter();
      const { highlights = [] } = opts2 || {};
      const themesObject = typeof theme2 === "string" ? { default: theme2 } : theme2 || {};
      const themeNames = Object.values(themesObject);
      if (themeNames.length) {
        await Promise.all(themeNames.map((theme3) => highlighter.loadTheme(theme3)));
      }
      if (lang && !highlighter.getLoadedLanguages().includes(lang)) {
        await highlighter.loadLanguage(lang);
      }
      const root = highlighter.codeToHast(code.trimEnd(), {
        lang,
        themes: themesObject,
        defaultColor: false,
        transforms: {
          line(node, line) {
            node.properties ||= {};
            if (highlights.includes(line)) {
              node.properties.class = (node.properties.class || "") + " highlight";
            }
            node.properties.line = line;
          }
        }
      });
      const preEl = root.children[0];
      const codeEl = preEl.children[0];
      preEl.properties.style = wrapperStyle ? typeof wrapperStyle === "string" ? wrapperStyle : preEl.properties.style : "";
      const style = Object.keys(themesObject).map((color) => {
        const colorScheme = color !== "default" ? `.${color}` : "";
        return [
          wrapperStyle ? `html${colorScheme} .shiki,` : "",
          `html${colorScheme} .shiki span {`,
          `color: var(--shiki-${color});`,
          `background: var(--shiki-${color}-bg);`,
          `font-style: var(--shiki-${color}-font-style);`,
          `font-weight: var(--shiki-${color}-font-weight);`,
          `text-decoration: var(--shiki-${color}-text-decoration);`,
          "}"
        ].join("").trim();
      }).join("\n");
      return {
        tree: codeEl.children,
        className: preEl.properties.class,
        inlineStyle: preEl.properties.style,
        style
      };
    } catch (error) {
      console.warn("[@nuxtjs/mdc] Failed to highlight code block", error.message);
      return {
        tree: [{ type: "text", value: code }],
        className: "",
        inlineStyle: "",
        style: ""
      };
    }
  };
  return {
    getHighlightedAST
  };
});
function createSingleton(fn) {
  let instance;
  return (...args) => {
    if (!instance) {
      instance = fn(...args);
    }
    return instance;
  };
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

const _JvCEhk = lazyEventHandler(async () => {
  const { highlight } = useRuntimeConfig().mdc;
  try {
    const wasm = await import('file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/shikiji@0.6.10/node_modules/shikiji/dist/onig.wasm').then((r) => r.default);
    await loadWasm(async (obj) => WebAssembly.instantiate(wasm, obj));
  } catch {
    await loadWasm({ data: await import('file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/shikiji@0.6.10/node_modules/shikiji/dist/wasm.mjs').then((r) => r.getWasmInlined()).then((r) => r.data) });
  }
  const shiki = useShikiHighlighter(highlight);
  return eventHandler(async (event) => {
    const { code, lang, theme: themeString, highlights: highlightsString } = getQuery$1(event);
    const theme = JSON.parse(themeString);
    const highlights = highlightsString ? JSON.parse(highlightsString) : void 0;
    return await shiki.getHighlightedAST(code, lang, theme, { highlights });
  });
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => {
  return Array.isArray(value) ? value : [void 0, null].includes(value) ? [] : [value];
};

const arrayParams = ["sort", "where", "only", "without"];
function createQuery(fetcher, opts = {}) {
  const queryParams = {};
  for (const key of Object.keys(opts.initialParams || {})) {
    queryParams[key] = arrayParams.includes(key) ? ensureArray(opts.initialParams[key]) : opts.initialParams[key];
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const resolveResult = (result) => {
    if (opts.legacy) {
      if (result?.surround) {
        return result.surround;
      }
      if (!result) {
        return result;
      }
      if (result?.dirConfig) {
        result.result = {
          _path: result.dirConfig?._path,
          ...result.result,
          _dir: result.dirConfig
        };
      }
      return result?._path || Array.isArray(result) || !Object.prototype.hasOwnProperty.call(result, "result") ? result : result?.result;
    }
    return result;
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query).then(resolveResult),
    findOne: () => fetcher($set("first")(true)).then(resolveResult),
    count: () => fetcher($set("count")(true)).then(resolveResult),
    // locale
    locale: (_locale) => query.where({ _locale }),
    withSurround: $set("surround", (surroundQuery, options) => ({ query: surroundQuery, ...options })),
    withDirConfig: () => $set("dirConfig")(true)
  };
  if (opts.legacy) {
    query.findSurround = (surroundQuery, options) => {
      return query.withSurround(surroundQuery, options).find().then(resolveResult);
    };
    return query;
  }
  return query;
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler()(
    postprocess(
      parse(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

const useProcessorPlugins = async (processor, plugins = {}) => {
  const toUse = Object.entries(plugins).filter((p) => p[1] !== false);
  for (const plugin of toUse) {
    const instance = plugin[1].instance || await import(
      /* @vite-ignore */
      plugin[0]
    ).then((m) => m.default || m);
    processor.use(instance, plugin[1].options);
  }
};

const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
const validateProp = (attribute, value) => {
  if (attribute.startsWith("on")) {
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return !unsafeLinkPrefix.some((prefix) => value.toLowerCase().startsWith(prefix));
  }
  return true;
};
const validateProps = (props) => {
  if (!props) {
    return {};
  }
  return Object.fromEntries(
    Object.entries(props).filter(([name, value]) => {
      const isValid = validateProp(name, value);
      if (!isValid) {
        console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${name}="${value}"`);
      }
      return isValid;
    })
  );
};

function compileHast() {
  const slugs = new Slugger();
  function compileToJSON(node) {
    if (node.type === "root") {
      return {
        type: "root",
        children: node.children.map(compileToJSON).filter(Boolean)
      };
    }
    if (node.type === "element") {
      if (node.tagName === "p" && node.children.every((child) => child.type === "text" && /^\s*$/.test(child.value))) {
        return null;
      }
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children?.flatMap((child) => {
          if (child.type === "element" && child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName?.match(/^h\d$/)) {
        node.properties = node.properties || {};
        node.properties.id = String(node.properties?.id || slugs.slug(toString$1(node))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1");
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.properties),
        children: node.children.map(compileToJSON).filter(Boolean)
      };
    }
    if (node.type === "text" && node.value !== "\n") {
      return {
        type: "text",
        value: node.value
      };
    }
    return null;
  }
  this.Compiler = (tree) => {
    const body = compileToJSON(tree);
    let excerpt = void 0;
    const excerptIndex = tree.children.findIndex((node) => node.type === "comment" && node.value?.trim() === "more");
    if (excerptIndex !== -1) {
      excerpt = compileToJSON({
        type: "root",
        children: tree.children.slice(0, excerptIndex)
      });
      if (excerpt.children.find((node) => node.type === "element" && node.tag === "pre")) {
        const lastChild = body.children[body.children.length - 1];
        if (lastChild.type === "element" && lastChild.tag === "style") {
          excerpt.children.push(lastChild);
        }
      }
    }
    return {
      body,
      excerpt
    };
  };
}

function emphasis(state, node) {
  const result = {
    type: "element",
    tagName: "em",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function parseThematicBlock(lang) {
  if (!lang?.trim()) {
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/{([^}]*)}/);
  const filenameMatches = lang.match(/\[((\\]|[^\]])*)\]/);
  const meta = lang.replace(languageMatches?.[0] ?? "", "").replace(highlightTokensMatches?.[0] ?? "", "").replace(filenameMatches?.[0] ?? "", "").trim();
  return {
    language: languageMatches?.[0] || void 0,
    highlights: parseHighlightedLines(highlightTokensMatches?.[1] || void 0),
    // https://github.com/nuxt/content/pull/2169
    filename: filenameMatches?.[1].replace(/\\]/g, "]") || void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}

const code = (state, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename, meta } = parseThematicBlock(lang);
  const value = node.value ? detab(node.value + "\n") : "";
  let result = {
    type: "element",
    tagName: "code",
    properties: { __ignoreMap: "" },
    children: [{ type: "text", value }]
  };
  if (meta) {
    result.data = {
      // @ts-ignore
      meta
    };
  }
  state.patch(node, result);
  result = state.applyData(node, result);
  const properties = {
    language,
    filename,
    highlights,
    meta,
    code: value
  };
  if (language) {
    properties.className = ["language-" + language];
  }
  result = { type: "element", tagName: "pre", properties, children: [result] };
  state.patch(node, result);
  return result;
};

function html(state, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (state.dangerous || state.options?.allowDangerousHtml) {
    const result = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }
  return void 0;
}

function link$1(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function list(state, node) {
  const properties = {};
  const results = state.all(node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    properties.start = node.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    properties.className = ["contains-task-list"];
  }
  const result = {
    type: "element",
    tagName: node.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(state, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return state.all(node);
    }
  }
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function image(state, node) {
  const properties = { ...node.attributes, src: normalizeUri(node.url) };
  if (node.alt !== null && node.alt !== void 0) {
    properties.alt = node.alt;
  }
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node, result);
  return state.applyData(node, result);
}

function strong(state, node) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function inlineCode(state, node) {
  const language = node.attributes?.language || node.attributes?.lang;
  const text = { type: "text", value: node.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node, text);
  const result = {
    type: "element",
    tagName: "code",
    properties: node.attributes || {},
    children: [text]
  };
  const classes = (result.properties.class || "").split(" ");
  delete result.properties.class;
  if (language) {
    result.properties.language = language;
    delete result.properties.lang;
    classes.push("language-" + language);
  }
  result.properties.className = classes.join(" ");
  state.patch(node, result);
  return state.applyData(node, result);
}

function containerComponent(state, node) {
  const result = {
    type: "element",
    tagName: node.name,
    properties: {
      ...node.attributes,
      ...node.data?.hProperties
    },
    children: state.all(node)
  };
  state.patch(node, result);
  result.attributes = node.attributes;
  result.fmAttributes = node.fmAttributes;
  return result;
}

const handlers$1 = {
  emphasis,
  code,
  link: link$1,
  paragraph,
  html,
  list,
  image,
  strong,
  inlineCode,
  containerComponent
};

const defaults$1 = {
  remark: {
    plugins: {
      "remark-emoji": {
        instance: remarkEmoji
      },
      "remark-gfm": {
        instance: remarkGFM
      }
    }
  },
  rehype: {
    options: {
      // @ts-ignore
      handlers: handlers$1,
      allowDangerousHtml: true
    },
    plugins: {
      "rehype-external-links": {
        instance: rehypeExternalLinks
      },
      "rehype-sort-attribute-values": {
        instance: rehypeSortAttributeValues
      },
      "rehype-sort-attributes": {
        instance: rehypeSortAttributes
      },
      "rehype-raw": {
        instance: rehypeRaw,
        options: {
          passThrough: ["element"]
        }
      }
    }
  },
  highlight: false,
  toc: {
    searchDepth: 2,
    depth: 2
  }
};

const defaults = {
  theme: {
    default: "github-light",
    dark: "github-dark"
  },
  highlighter: (code, lang, theme, highlights) => {
    return $fetch("/api/_mdc/highlight", {
      params: {
        code,
        lang,
        theme: JSON.stringify(theme),
        highlights: JSON.stringify(highlights)
      }
    });
  }
};
function rehypeShiki(opts = {}) {
  const options = defu$1(opts, defaults);
  return async (tree) => {
    const tasks = [];
    const styles = [];
    visit(
      tree,
      (node) => ["pre", "code"].includes(node.tagName) && !!node.properties?.language,
      (node) => {
        const _node = node;
        const task = options.highlighter(
          toString$1(node),
          _node.properties.language,
          options.theme,
          _node.properties.highlights ?? []
        ).then(({ tree: tree2, className, style, inlineStyle }) => {
          _node.properties.className = ((_node.properties.className || "") + " " + className).trim();
          _node.properties.style = ((_node.properties.style || "") + " " + inlineStyle).trim();
          if (_node.children[0]?.tagName === "code") {
            _node.children[0].children = tree2;
          } else {
            _node.children = tree2[0].children;
          }
          if (style)
            styles.push(style);
        });
        tasks.push(task);
      }
    );
    if (tasks.length) {
      await Promise.all(tasks);
      tree.children.push({
        type: "element",
        tagName: "style",
        children: [{ type: "text", value: cleanCSS(styles.join("")) }],
        properties: {}
      });
    }
  };
}
const cleanCSS = (css) => {
  const styles = css.split("}").filter((s) => Boolean(s.trim())).map((s) => s.trim() + "}");
  return Array.from(new Set(styles)).join("");
};

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value || "";
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).filter(Boolean).join("");
  }
  return "";
}

let moduleOptions;
const parseMarkdown = async (md, opts = {}) => {
  if (!moduleOptions) {
    moduleOptions = await import(
      'file:///Users/keqing/Code/English-for-Technical-Interviews/.nuxt/mdc-imports.mjs'
      /* @vite-ignore */
    ).catch(() => ({}));
  }
  const options = defu$1(opts, {
    remark: { plugins: moduleOptions?.remarkPlugins },
    rehype: { plugins: moduleOptions?.rehypePlugins },
    highlight: moduleOptions?.highlight
  }, defaults$1);
  const { content, data: frontmatter } = await parseFrontMatter(md);
  const processor = unified();
  processor.use(remarkParse);
  processor.use(remarkMDC);
  await useProcessorPlugins(processor, options.remark?.plugins);
  processor.use(remark2rehype, options.rehype?.options);
  if (options.highlight) {
    processor.use(rehypeShiki, options.highlight);
  }
  await useProcessorPlugins(processor, options.rehype?.plugins);
  processor.use(compileHast);
  const processedFile = await processor.process({ value: content, data: frontmatter });
  const result = processedFile.result;
  const data = Object.assign(
    contentHeading(result.body),
    frontmatter,
    processedFile?.data || {}
  );
  let toc;
  if (data.toc !== false) {
    const tocOption = defu$1(data.toc || {}, options.toc);
    toc = generateToc(result.body, tocOption);
  }
  return {
    data,
    body: result.body,
    excerpt: result.excerpt,
    toc
  };
};
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en", respectPathCase = false } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"), { respectPathCase });
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: content._draft ?? isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true, respectPathCase = false } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: !respectPathCase })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parseMarkdown(content, {
      highlight: options.highlight,
      remark: {
        plugins: config.remarkPlugins
      },
      rehype: {
        options: {
          handlers: {
            link
          }
        },
        plugins: config.rehypePlugins
      },
      toc: config.toc
    });
    return {
      ...parsed.data,
      excerpt: parsed.excerpt,
      body: {
        ...parsed.body,
        toc: parsed.toc
      },
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        options: plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}
function link(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function normalizeLink(link2) {
  const match = link2.match(/#.+$/);
  const hash = match ? match[0] : "";
  if (link2.replace(/#.+$/, "").endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(".md" + hash, ""), { forceLeadingSlash: false }) + hash;
  } else {
    return link2;
  }
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: (_id, content) => {
    const { data } = parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('file:///Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/index.js').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

function makeIgnored(ignores) {
  const rxAll = ["/\\.", "/-", ...ignores.filter((p) => p)].map((p) => new RegExp(p));
  return function isIgnored(key) {
    const path = "/" + key.replace(/:/g, "/");
    return rxAll.some((rx) => rx.test(path));
  };
}

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or math every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before ?? 1;
    after = after ?? 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const matchingPipelines = [
    // Conditions
    (state, params) => {
      const filtered = state.result.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery)));
      return {
        ...state,
        result: filtered,
        total: filtered.length
      };
    },
    // Sort data
    (state, params) => ensureArray(params.sort).forEach((options) => sortList(state.result, options)),
    function fetchSurround(state, params, db) {
      if (params.surround) {
        let _surround = surround(state.result?.length === 1 ? db : state.result, params.surround);
        _surround = apply(withoutKeys(params.without))(_surround);
        _surround = apply(withKeys(params.only))(_surround);
        state.surround = _surround;
      }
      return state;
    }
  ];
  const transformingPiples = [
    // Skip first items
    (state, params) => {
      if (params.skip) {
        return {
          ...state,
          result: state.result.slice(params.skip),
          skip: params.skip
        };
      }
    },
    // Pick first items
    (state, params) => {
      if (params.limit) {
        return {
          ...state,
          result: state.result.slice(0, params.limit),
          limit: params.limit
        };
      }
    },
    function fetchDirConfig(state, params, db) {
      if (params.dirConfig) {
        const path = state.result[0]?._path || params.where?.find((w) => w._path)?._path;
        const dirConfig = db.find((item) => item._path === joinURL(path, "_dir"));
        if (dirConfig) {
          state.dirConfig = { _path: dirConfig._path, ...withoutKeys(["_"])(dirConfig) };
        }
      }
      return state;
    },
    // Remove unwanted fields
    (state, params) => ({
      ...state,
      result: apply(withoutKeys(params.without))(state.result)
    }),
    // Select only wanted fields
    (state, params) => ({
      ...state,
      result: apply(withKeys(params.only))(state.result)
    })
  ];
  return async (query) => {
    const db = await getContentsList();
    const params = query.params();
    const result1 = {
      result: db,
      limit: 0,
      skip: 0,
      total: db.length
    };
    const matchedData = matchingPipelines.reduce(($data, pipe) => pipe($data, params, db) || $data, result1);
    if (params.count) {
      return {
        result: matchedData.result.length
      };
    }
    const result = transformingPiples.reduce(($data, pipe) => pipe($data, params, db) || $data, matchedData);
    if (params.first) {
      return {
        ...omit(["skip", "limit", "total"])(result),
        result: result.result[0]
      };
    }
    return result;
  };
}

const isPreview = (event) => {
  const previewToken = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && !params.surround && !params.dirConfig && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const isIgnored = makeIgnored(contentConfig.ignores);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || isIgnored(key)) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
function* chunksFromArray(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const keyChunks = [...chunksFromArray(keys, 10)];
  const contents = [];
  for (const chunk of keyChunks) {
    const result = await Promise.all(chunk.map((key) => getContent(event, key)));
    contents.push(...result);
  }
  return contents;
};
const pendingPromises = {};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  const meta = await sourceStorage.getMeta(id);
  const mtime = meta.mtime;
  const size = meta.size || 0;
  const hash$1 = hash({
    // Last modified time
    mtime,
    // File size
    size,
    // Add Content version to the hash, to revalidate the cache on content update
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  const promise = pendingPromises[hash$1] || new Promise(async (resolve) => {
    const body = await sourceStorage.getItem(id);
    if (body === null) {
      return resolve({ _id: contentId, body: null });
    }
    const parsed = await parseContent(contentId, body);
    await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
    });
    resolve(parsed);
    delete pendingPromises[hash$1];
  });
  return promise;
};
const parseContent = async (id, content, opts = {}) => {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: {
        ...contentConfig.markdown,
        highlight: contentConfig.highlight
      },
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales,
        respectPathCase: contentConfig.respectPathCase
      }
    }
  );
  const file = { _id: id, body: typeof content === "string" ? content.replace(/\r\n|\r/g, "\n") : content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
};
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent$1(event, query, ...pathParts) {
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  const queryBuilder = advanceQuery ? createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: false }) : createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: true });
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (contentConfig.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: contentConfig.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params?.qid?.replace(/.json$/, "");
  const query = getQuery$1(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid].where && !Array.isArray(memory[qid].where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (qid && memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _tQW9mJ = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  if (query.first) {
    let contentQuery = serverQueryContent$1(event, query);
    if (!advanceQuery) {
      contentQuery = contentQuery.withDirConfig();
    }
    const content = await contentQuery.findOne();
    const _result = advanceQuery ? content?.result : content;
    const missing = !_result && !content?.dirConfig?.navigation?.redirect && !content?._dir?.navigation?.redirect;
    if (missing) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  if (query.count) {
    return serverQueryContent$1(event, query).count();
  }
  return serverQueryContent$1(event, query).find();
});

const _S69qZw = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent$1(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents,
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().public.content;
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _rhZpQp = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent$1(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent$1(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = (dirConfigs?.result || dirConfigs).reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents?.result || contents, configs);
});

const _lazy_BnvNAd = () => Promise.resolve().then(function () { return search$1; });
const _lazy_1TE3It = () => Promise.resolve().then(function () { return opensearch_xml$1; });
const _lazy_AVruIz = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/search', handler: _lazy_BnvNAd, lazy: true, middleware: false, method: undefined },
  { route: '/opensearch.xml', handler: _lazy_1TE3It, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_AVruIz, lazy: true, middleware: false, method: undefined },
  { route: '/api/_mdc/highlight', handler: _JvCEhk, lazy: false, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid/**:params', handler: _tQW9mJ, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _tQW9mJ, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _tQW9mJ, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.json', handler: _S69qZw, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _rhZpQp, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _rhZpQp, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _rhZpQp, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_AVruIz, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (...args) => {
    return _localFetch(...args).then(
      (response) => normalizeFetchResponse(response)
    );
  };
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (U === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (C) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template$1 = _template;

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const serverQueryContent = serverQueryContent$1;

const search = defineEventHandler(async (event) => {
  var _a, _b;
  const appConfig = useAppConfig();
  ((_b = (_a = appConfig == null ? void 0 : appConfig.docus) == null ? void 0 : _a.search) == null ? void 0 : _b.mode) || "meta";
  let docs = await serverQueryContent(event).find();
  docs = await Promise.all(
    docs.filter(
      (doc) => {
        return (doc == null ? void 0 : doc._extension) === "md" && (doc == null ? void 0 : doc._draft) === false && !(doc == null ? void 0 : doc._empty);
      }
    ).map(
      async ({ _id: id, _path: path, _dir: dir, title = "", description = "", body = void 0, ...rest }) => {
        var _a2;
        const { directoryIcon } = rest;
        if (directoryIcon) {
          console.log({ directoryIcon });
        }
        return {
          id,
          path,
          dir,
          title,
          description,
          keywords: (_a2 = body == null ? void 0 : body.toc) == null ? void 0 : _a2.links.map((link) => link == null ? void 0 : link.text),
          // Only fetch body for `full-text` mode.
          body: extractTextFromAst(body) || ""
        };
      }
    )
  );
  return docs;
});
function extractTextFromAst(node) {
  let text = "";
  if (node.type === "text") {
    text += node.value;
  }
  if (node.children) {
    for (const child of node.children) {
      text += " " + extractTextFromAst(child);
    }
  }
  return text;
}

const search$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: search
});

const opensearch_xml = defineEventHandler(async () => {
  var _a, _b, _c, _d;
  const config = useAppConfig();
  return '<?xml version="1.0"?>\n<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">\n  <ShortName>' + ((_a = config == null ? void 0 : config.docus) == null ? void 0 : _a.title) + "</ShortName>\n  <Description>" + ((_b = config == null ? void 0 : config.docus) == null ? void 0 : _b.description) + '</Description>\n  <Image width="16" height="16" type="image/x-icon">' + ((_c = config == null ? void 0 : config.docus) == null ? void 0 : _c.url) + '/favicon.ico</Image>\n  <Url type="text/html" template="' + ((_d = config == null ? void 0 : config.docus) == null ? void 0 : _d.url) + '">\n    <Param name="q" value="{searchTerms}"/>\n  </Url>\n</OpenSearchDescription>';
});

const opensearch_xml$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: opensearch_xml
});

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = [];

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[],"htmlAttrs":{"lang":"en"}};

const appRootId = "__nuxt";

const appRootTag = "div";

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file:///Users/keqing/Code/English-for-Technical-Interviews/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file:///Users/keqing/Code/English-for-Technical-Interviews/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag}${` id="${appRootId}"` }>${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "");
  const options = {
    manifest,
    renderToString: () => `<${appRootTag}${` id="${appRootId}"` }>${spaTemplate}</${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {}
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !islandContext;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  head.push(appHead, headEntryOptions);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !islandContext || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = Boolean(islandContext) ? await renderInlineStyles(ssrContext.modules ?? ssrContext._registeredComponents ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  head.push({ style: inlinedStyles });
  head.push({
    link: Object.values(styles).map(
      (resource) => ({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) })
    )
  }, headEntryOptions);
  if (!NO_SCRIPTS) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head);
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: [htmlAttrs],
    head: normalizeChunks([headTags, ssrContext.styles]),
    bodyAttrs: [bodyAttrs],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [_rendered.html],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    type: "application/json",
    id: opts.id,
    innerHTML: contents,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
