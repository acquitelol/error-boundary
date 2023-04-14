function F(o){window.enmity.plugins.registerPlugin(o)}const s=window.enmity.modules.common.Constants,L=window.enmity.modules.common.Clipboard;window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const c=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function E(...o){return window.enmity.modules.getByProps(...o)}function M(...o){return window.enmity.modules.getByName(...o)}window.enmity.modules.common;function k(o){return window.enmity.patcher.create(o)}var x="PrettyErrorBoundary",B="1.0.4",N="Makes the Discord ErrorBoundary much more pretty and functional. This is my implementation of the Vendetta concept.",P=[{name:"Rosie<3",id:"581573474296791211"}],O="#ff9caf",p={name:x,version:B,description:N,authors:P,color:O};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const _=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const Y=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const l=e.Text;e.TextInput,e.TouchableHighlight;const $=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable;const r=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio,e.FormRow,e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;const{Fonts:{PRIMARY_NORMAL:H,PRIMARY_MEDIUM:V,PRIMARY_BOLD:z},ThemeColorMap:d}=s;var m=c.createThemedStyleSheet({header:{alignItems:"center",flexDirection:"row"},text:{fontFamily:H},headerLeftSection:{backgroundColor:d.BACKGROUND_TERTIARY,width:"52.5%",height:175,padding:10,margin:10,borderRadius:15},headerLeftSectionTitle:{color:d.HEADER_PRIMARY,fontSize:24,fontFamily:z,textAlign:"center"},headerLeftSectionBody:{color:d.HEADER_SECONDARY,fontSize:16,fontFamily:V,textAlign:"center"},headerRightSection:{backgroundColor:d.BACKGROUND_TERTIARY,flexGrow:1,height:175,padding:10,marginVertical:10,marginRight:10,borderRadius:15,justifyContent:"center",alignItems:"center"},headerRightCircle:{backgroundColor:d.HEADER_PRIMARY,width:void 0,height:"50%",aspectRatio:1/1,borderRadius:999},headerRightImageLarge:{width:void 0,height:"50%",aspectRatio:1/1,position:"absolute",transform:[{translateX:"25%"},{translateY:"-25%"}]},headerRightImageSmall:{width:void 0,height:"40%",aspectRatio:1/1,position:"absolute",transform:[{scaleX:-1},{translateX:"25%"},{translateY:"15%"}]}});const{ThemeColorMap:G}=s;var R=c.createThemedStyleSheet({island:{backgroundColor:G.BACKGROUND_SECONDARY,width:"95%",marginHorizontal:10,marginTop:10,borderRadius:15}}),K=()=>t.createElement(r,{style:[R.island,m.header]},t.createElement(r,{style:m.headerLeftSection},t.createElement(l,{style:m.headerLeftSectionTitle},"Discord has crashed."),t.createElement(l,{style:m.headerLeftSectionBody},"Don't worry! We'll fix this soon. Relax and take Kemonomimi-chan in the meantime.")),t.createElement(r,{style:m.headerRightSection},t.createElement(r,{style:m.headerRightCircle}),[m.headerRightImageLarge,m.headerRightImageSmall].map(o=>t.createElement(_,{style:o,source:{uri:"https://cdn.discordapp.com/emojis/1094996543662207026.gif?size=2048&quality=lossless"}}))));const{Fonts:{PRIMARY_SEMIBOLD:U,CODE_SEMIBOLD:j},ThemeColorMap:S}=s;var u=c.createThemedStyleSheet({header:{color:S.HEADER_PRIMARY,marginTop:10,marginLeft:15,fontSize:20,fontFamily:U},container:{backgroundColor:S.BACKGROUND_TERTIARY,margin:10,padding:10,borderRadius:10},body:{color:S.HEADER_SECONDARY,fontFamily:j}}),J=({error:o,engine:n})=>t.createElement(r,{style:R.island},t.createElement(l,{style:u.header},"Here's a short outline of what happened:"),t.createElement(r,{style:u.container},t.createElement(l,{style:u.body},o.toString())),t.createElement(r,{style:[u.container,{marginTop:0}]},t.createElement(l,{style:u.body},"js engine: ",n)));const{Fonts:{PRIMARY_SEMIBOLD:X,CODE_SEMIBOLD:W},ThemeColorMap:h}=s;var f=c.createThemedStyleSheet({header:{color:h.HEADER_PRIMARY,marginTop:10,marginLeft:15,fontSize:20,fontFamily:X},buttons:{backgroundColor:h.BACKGROUND_TERTIARY,margin:10,padding:10,borderRadius:15},errorContainer:{backgroundColor:h.BACKGROUND_TERTIARY,margin:10,padding:10,borderRadius:10},errorBody:{color:h.HEADER_SECONDARY,fontFamily:W}});const{Fonts:{PRIMARY_BOLD:q},ThemeColorMap:Q,Colors:Z}=s;var C=c.createThemedStyleSheet({container:{backgroundColor:Z.BRAND_500,height:40,borderRadius:5,margin:5,justifyContent:"center",alignItems:"center",flexDirection:"row"},text:{color:Q.TEXT_NORMAL,fontFamily:q,paddingLeft:10,paddingRight:10,letterSpacing:.25,fontSize:16,textAlign:"center"}}),y=({label:o,onPress:n,style:i})=>{const[a,I]=t.useState(o);return t.createElement($,{style:[C.container,i],onPress:()=>n(a,I)},t.createElement(l,{style:C.text},a))};const{native:g}=window.enmity;function ee(){g.reload()}g.version,g.build,g.device,g.version;var T,b;const{NativeModules:A}=E("View","Text"),w=({label:o,text:n})=>({label:o,onPress:(i,a)=>{L.setString(n),a("Copied!"),setTimeout(()=>{a(i)},700)}}),te=({error:o,debug:n})=>`
    ----------------------
      ~ JS Stack Trace ~
    ----------------------
    ${o.stack}
    ----------------------
    ~ End JS Stack Trace ~
    ----------------------
    ----------------------
       ~ React Stack ~
    ----------------------
    ${o.name}
    ${o.componentStack}
    ----------------------
     ~ End React Stack ~
    ----------------------
    ----------------------
        ~ Debug Logs ~
    ----------------------
    ${n}
    ----------------------
      ~ End Debug Logs ~
    ----------------------
    `.split(`
`).map(i=>i.trim()).join(`
`),oe=({actions:o})=>t.createElement(r,{style:{flexDirection:"row"}},o.map(n=>t.createElement(y,{style:{flex:1/o.length},...n}))),D={...(T=window.HermesInternal)==null?void 0:T.getRuntimeProperties(),...(b=A==null?void 0:A.PlatformConstants)==null?void 0:b.getConstants()};var ne=({setNoError:o,error:n})=>{var i,a;return t.createElement(r,{style:R.island},t.createElement(l,{style:f.header},"Some things you can do while you wait:"),t.createElement(r,{style:f.buttons},t.createElement(oe,{actions:[w({label:"Copy JS Trace",text:(i=n.stack)!=null?i:"No JS Stack Trace"}),w({label:"Copy React Stack",text:(a=n.componentStack)!=null?a:"No Component Stack"})]}),t.createElement(y,{...w({label:"Copy Debug Logs",text:JSON.stringify(D,null,2)})}),t.createElement(y,{...w({label:"Copy All",text:te({error:n,debug:JSON.stringify(D,null,2)})})}),t.createElement(y,{label:"Retry Render",onPress:o}),t.createElement(y,{label:"Restart Discord",onPress:ee})))};const re=M("ErrorBoundary"),{SafeAreaView:ie}=E("SafeAreaView"),v=k(p.name),ae=c.createThemedStyleSheet({container:{backgroundColor:s.ThemeColorMap.BACKGROUND_PRIMARY,width:"100%",height:"100%",alignItems:"center",flex:1}}),me={...p,onStart(){function o(){v.after(re.prototype,"render",n=>{if(n.state.error)return t.createElement(ie,{style:ae.container},t.createElement(Y,null,t.createElement(K,null),t.createElement(J,{error:n.state.error,engine:window.HermesInternal?"hermes":"jsc"}),t.createElement(ne,{setNoError:()=>n.setState({info:null,error:null}),error:n.state.error})))})}setTimeout(()=>o(),500)},onStop(){v.unpatchAll()},getSettingsPanel(){return t.createElement("cute",null)}};F(me);
