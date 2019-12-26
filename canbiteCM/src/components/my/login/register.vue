<template>
  <div class="register">
    <!-- 头部 -->
    <div class="header">
      <img src="@/images/my/login/logo.png" alt class="logo" />
      <img src="@/images/my/login/blaotie.com.png" alt class="blaotie" />
    </div>
    <div class="input">
      <!-- 账号 -->
      <div class="zhanghao">
        <img src="@/images/my/login/icon1.png" alt class="icon1" />
        <input type="text" placeholder="昵称" v-model="userName" />
        <img src="@/images/my/login/delet.png" alt @click="del1" v-if="userName!==''" class="shan"/>
      </div>
      <!-- 电话 -->
      <div class="tel">
        <img src="@/images/my/login/icon3.png" alt class="icon2" />
        <input type="text" placeholder="手机号" v-model="tel" />
        <img src="@/images/my/login/delet.png" alt @click="del2" v-if="tel!==''" />
      </div>
      <!-- 获取验证码 -->
      <div class="idcode">
        <img src="@/images/my/login/icon4.png" alt class="icon1" />
        <input type="text" placeholder="验证码" v-model="code" />
        <img src="@/images/my/login/delet.png" alt @click="del3" v-if="code!==''" />
        <span v-show="sendAuthCode" :style="{'color':'#91BCE6'}"  @click="getAuthCode">获取验证码</span>
        <span v-show="!sendAuthCode">{{auth_time}}秒之后重新发送验证码</span>
      </div>
      <!-- 密码 -->
      <div class="mima">
        <img src="@/images/my/login/icon2.png" alt class="icon2" />
        <input type="password" placeholder="密码" v-model="password" v-if="mima==true"/>
        <input type="text" placeholder="密码" v-model="password" v-if="mima==false"/>
        <img src="@/images/my/login/codehide.png" alt="" class="eye" v-if="yan==true" @click="showyan"/>
        <img src="@/images/my/login/codeshow.png" alt="" class="eye" v-if="yan==false" @click="showyan">
        <img src="@/images/my/login/delet.png" alt @click="del4" v-if="password!==''" class="shan"/>
      </div>
      <!-- 注册 -->
      <div class="login">
        <img src="@/images/my/login/button.png" alt />
        <p @click="zhuce">注 册</p>
      </div>
      <!-- 协议 -->
      <div class="xieyi">
        <img src="@/images/my/login/click.png" @click="agreen" v-if="show==true" />
        <img src="@/images/my/login/unclick.png" @click="agreen" v-if="show==false" />
        <span v-if="show==true" @click="user1">《用户协议》</span>
        <span v-if="show==true" @click="user2">《用户须知》</span>
        <span :style="{'color':'#91BCE6'}" v-if="show==false" @click="user1">《用户协议》</span>
        <span v-if="show==false" :style="{'color':'#91BCE6'}" @click="user2">《用户须知》</span>
      </div>
      <!-- 底部 -->
      <div class="foot">
        <p class="p1" @click="find">找回密码</p>
        <p class="p2" @click="denglu">登录</p>
      </div>
    </div>
    <!-- 协议 -->
    <div class="agreement" v-if="Useragreement">
      <div class="inner">
        <img src="@/images/my/login/button.png" alt />
        <p class="xieyi">用户协议</p>
        <div class="wenzi">
          <p>尊敬的用户，您好！</p>
          <p>欢迎您来到“币老铁”。 币老铁是从事数字资产行情、新闻资讯、基础数据服务、项目导航等的移动设备客户端。努力提升用户的客户体验是币老铁的致力追求的目标。为了更好的保护用户和币老铁的合法权益，规范用户和币老铁的行为，特达成如下用户协议条款。</p>
          <p>请您仔细阅读本用户协议全部条款，如果您对本用户协议的任何条款表示异议，您可以选择不进入币老铁。当您注册成功，无论是进入币老铁，还是在币老铁上发布任何内容，或者是直接或者通过各类方式(如站外API引用等)间接使用币老铁服务和数据的行为，都将被视作已无条件接受本用户协议约定的全部内容。</p>
          <p>若您对本用户协议的任何条款有异议，请停止使用币老铁所提供的全部服务。</p>
          <p>一、使用规则</p>
          <p>
            用户注册成功后，币老铁将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户自己负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任。
            用户须对在币老铁的注册信息的真实性、合法性、有效性承担全部责任，用户不得冒充他人；不得利用他人的名义发布任何信息；不得恶意使用注册帐号导致其他用户误认。
            所有用户，包括但不限于自然人、法人或者其他组织在币老铁上注册和使用的互联网账号名称，不得有下列情形：
          </p>
          <p>(一)违反宪法或者法律法规规定的；</p>
          <p>(二)危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</p>
          <p>(三)损害国家荣誉和利益的，损害公共利益的；</p>
          <p>(四)煽动民族仇恨、民族歧视，破坏民族团结的；</p>
          <p>(五)破坏国家宗教政策，宣扬邪教和封建迷信的；</p>
          <p>(六)散布谣言，扰乱社会秩序，破坏社会稳定的；</p>
          <p>(七)散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p>
          <p>(八)侮辱或者诽谤他人，侵害他人合法权益的；</p>
          <p>(九)含有法律、行政法规禁止的其他内容的。</p>
          <p>用户注册的用户名禁止有如下情形：</p>
          <p>(一)请勿以党和国家领导人或者其他名人的真实姓名、字、号、艺名、笔名、头衔等注册和使用昵 称(如确为本人，需要提交相关证据并通过审核方可允许使用)；</p>
          <p>(二)请勿以国家组织机构或者其他组织机构的名称等注册和使用昵称(如确为该机构，需要提交相关证据并通过审核方可允许使用)；</p>
          <p>(三)请勿注册和使用与其他网友相同、相仿的名字或者昵称；</p>
          <p>(四)请勿注册和使用不文明、不健康的的ID和昵称；</p>
          <p>(五)请勿注册和使用易产生歧义、引起他人误解或者带有各种奇形怪状符号的ID和昵称。</p>
          <p>用户以虚假信息骗取账号名称注册，或者账号头像、简介等注册信息存在违法和不良信息的，币老铁有权暂停该用户使用或者立即注销该用户。币老铁是一个信息分享及传播的平台。用户通过币老铁发表的信息为公开的信息，其他第三方均可以通过币老铁获取用户发表的信息，用户对任何信息的发表即认可该信息为公开的信息，并单独对此行为承担法律责任；任何用户不愿被其他第三人获知的信息都不应该在币老铁上进行发表。 用户承诺不得以任何方式利用币老铁直接或者间接从事违反中国法律、以及社会公德的行为，币老铁有权对违反上述承诺的内容予以删除。 币老铁用户不得利用币老铁服务制作、上传、复制、发布、传播或者转载如下内容：</p>
          <p>(一)反对宪法所确定的基本原则的；</p>
          <p>(二)危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</p>
          <p>(三)损害国家荣誉和利益的；</p>
          <p>(四)煽动民族仇恨、民族歧视，破坏民族团结的；</p>
          <p>(五)破坏国家宗教政策，宣扬邪教和封建迷信的；</p>
          <p>(六)散布谣言，扰乱社会秩序，破坏社会稳定的；</p>
          <p>(七)散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p>
          <p>(八)侮辱或者诽谤他人，侵害他人合法权益的；</p>
          <p>(九)含有法律、行政法规禁止的其他内容的信息。</p>
          <p>币老铁有权对用户使用币老铁的情况进行审查和监督，如用户在使用币老铁时违反任何上述规定，币老铁或者其授权的人有权要求用户改正或者直接采取一切必要的措施(包括但不限于更改或者删除用户张贴的内容、暂停或者终止用户使用币老铁的权利)以减轻用户不当行为造成的影响。</p>
          <p>币老铁有权但无义务对用户发布的内容进行审核，有权根据相关证据结合《侵权责任法》、《信息网络传播权保护条例》等法律法规及币老铁运营原则对侵权信息进行处理。</p>
          <p>二、个人隐私</p>
          <p>
            尊重和保护用户个人隐私信息是币老铁的一贯原则，币老铁将通过技术手段、强化内部管理等办法充分保护用户的个人隐私信息，除法律另有规定，或者法律赋予有关国家机关强制性获取，或者事先得到用户明确授权等原因外，币老铁有义务在没有用户授权的前提下，不对外公开或者向第三方透露用户个人隐私信息以及用户在使用币老铁时所产生的数据。
            同时，为了运营和改善币老铁的技术与服务，币老铁将可能会自行收集使用或者向第三方提供用户的非个人隐私信息，这将有助于币老铁向用户提供更好的用户体验和服务质量。
          </p>
          <p>三、服务终止及暂停</p>
          <p>任何引起其他用户反感的行为，包括但不限于利用币老铁平台发布广告或者是垃圾信息，利用简信骚扰其他用户等，币老铁可随时行使暂停、收回、删除帐号的权利，并保留追究该用户全部法律责任的权利。</p>
          <p>四、免责申明</p>
          <p>用户在币老铁发表的内容仅表明其个人的立场和观点，并不代表币老铁的立场或者观点。作为内容的发表者，用户需自行对所发表内容负责。因所发表内容引发的一切纠纷，由该内容的发表者承担全部法律责任。币老铁不承担任何法律责任。</p>
          <p>用户知悉网络服务具有不确定性和可能随时中断的可能性。币老铁不保证网络服务一定能满足用户的要求，也不保证网络服务不会中断。币老铁对网络服务的及时性、安全性、准确性也都不作任何保证。</p>
          <p>因网络中断等原因给用户带来的用户体验不佳或者用户信息保存不善由用户自己承担相应的后果。用户知悉该后果与币老铁无关并明确放弃向币老铁主张任何权利，并不得向币老铁追究任何责任，更不向币老铁主张任何赔偿。 对于因不可抗力或者币老铁不能控制的原因造成的网络服务中断或者其它缺陷，币老铁不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。</p>
          <p>五、协议修改</p>
          <p>根据互联网的发展和有关法律、法规及规范性文件的变化，或者因业务发展需要，币老铁有权对本用户协议的条款作出修改或者变更。一旦本用户协议的内容发生变动，币老铁将会直接在币老铁移动服务端上公布修改之后的协议内容，该公布行为视为币老铁已经通知用户修改内容。用户同意币老铁在币老铁移动服务端公告本用户协议修改或者变更内容是币老铁通知用户的唯一方式。如果不同意币老铁对本用户协议相关条款所做的修改，用户有权并应当停止使用币老铁。如果用户继续使用币老铁，则视为用户接受币老铁对本用户协议相关条款所做的修改。</p>
          <p>六、法律适用和争议解决</p>
          <p>与本用户协议有关的全部内容，包括但不限于合同条款、修改、争议解决等均适用中国(为本用户协议之目的，中国仅指中国大陆地区，不包括中国香港特别行政区、中国澳门特别行政区、中国台湾地区)的法律。 凡因本用户协议引起的或与本用户协议有关的全部争议，用户与币老铁应当友好协商解决。不能协商或者协商不能解决的，双方均有权向币老铁注册地有管辖权的人民法院提起诉讼。</p>
        </div>
        <p class="zhidaole" @click="guanbi1">知道了</p>
      </div>
    </div>
    <div class="agreement" v-if="Userinstructions">
      <div class="inner">
        <img src="@/images/my/login/button.png" alt />
        <p class="xieyi">隐私政策</p>
        <div class="wenzi">
          <p>币老铁用户隐私政策</p>
          <p>一、概述和声明</p>
          <p>
            币老铁（或称“我们”、“本公司”）尊重并保护用户隐私，币老铁将按照本隐私权政策（以下简称“本政策”）收集、使用及共享您的个人/企业信息。本政策包含了我们收集、存储、保护、使用和共享您的个人信息的条款，我们建议您完整地阅读本政策，以帮助您了解维护自己隐私权的方式。为了使您充分理解本政策的内容，本政策中与您的权益存在或可能存在重大关系的条款，我们已采用粗体字进行标注提示您注意。当您同意本公司及关联公司的服务协议如《币老铁用户服务协议》时，或您使用本公司的移动设备客户端时，或您使用我们提供的任一服务时，即表示您已同意我们按照本政策来合法收集、使用和保护您的个人信息。
            我们将按照本政策来收集、保护、使用、共享您的个人信息，如国家法律法规或监管规定对币老铁另行规定或您与币老铁另行约定的条款与本政策不一致的，以另行规定、约定的为准。
            我们收集、使用您的信息是出于遵守国家法律法规的规定以及向您提供服务及提升服务质量的目的（包括支持我们开发新产品或完善已有产品功能，为您和其他用户提供更为优质的服务）。若您向我们提供了本政策中列明的信息，您可使用更多的币老铁服务，和（或）享受更便捷的客户服务，和（或）让我们更好地保护您的账户及资金安全，和（或）避免我们无法及时与您取得联系而产生对您不利的影响等。
          </p>
          <p>二、信息收集</p>
          <p>一旦您同意本协议或使用币老铁服务，您即同意本公司按照以下条款收集您的有关信息。
          我们收集信息的范围包括但不限于如下内容：</p>
          <p>2.1 登录名和密码</p>
          <p>为了遵守法律法规的要求，以及向您提供更个性化、更便捷的服务，我们需要识别您的身份。例如在您注册币老铁账户提供的各项服务时，您可能要向我们提供一些个人
          /企业信息，包括但不限于您的姓名/企业名称、身份证明/企业登记号、注册地址、电话号码和电子邮件地址、生物特征等信息及相关附加信息（如您所在的省份和城市、邮政编码等）。</p>
          <p>2.2 登录记录</p>
          <p>为便于您查询您的账户状态或历史记录，也为遵守法律法规，我们会保存您使用币老铁服务产生的交易信息，并严格按法律法规规定对这些信息进行妥善保管。</p>
          <p>2.3 第三方机构信息</p>
          <p>我们可能会从合作方、第三方认证机构等获得信息（包括但不限于收入、存款、有价证券、商业保险、不动产信息、纳税数额信息、个人贷款、各类信用卡和对外担保等征信信息、在商业活动中形成的各类交易记录、个人公共费用缴纳、违法违规信息、财产状况、行踪轨迹及其他信息）以补充我们自己收集的信息。</p>
          <p>2.4 操作信息</p>
          <p>为了保护您的账户安全，当您访问币老铁移动设备客户端时，或使用币老铁提供的服务时，我们可能会记录您操作的相关信息，包括但不限于您的计算机IP地址、设备标识符、硬件型号、操作系统版本、您的位置以及与币老铁的服务相关的日志信息，这些信息可帮助我们更好地识别您的身份。</p>
          <p>2.5 其他信息</p>
          <p>除上述信息外，我们还可能为了提供服务及改进服务质量的合理需要而收集您的其他信息。与此同时，为提高您使用 币老铁 提供的服务的安全性，更准确地预防钓鱼网站、短信欺诈和木马病毒，我们可能会通过了解一些您的网络使用习惯、您常用的软件信息以及通过识别您短信中的欺诈内容等手段来判断您账户的风险。</p>
          <p>三、信息保护和存储</p>
          <p>为保障您的信息安全，我们努力采取各种合理的物理、电子和管理方面的安全措施来保护您的信息，使您的信息不会被泄漏、毁损或者丢失。
          我们对可能接触到您的信息的员工或外包人员也采取了严格管理，包括但不限于根据岗位的不同采取不同的权限控制，与他们签署保密协议，监控他们的操作情况等措施。
          币老铁 会按现有技术提供相应的安全措施来保护您的信息，提供合理的安全保障，我们将在任何时候尽力做到使您的信息不被泄漏、毁损或丢失。</p>
          <p>四、信息使用</p>
          <p>因收集您的信息是出于遵守国家法律法规的规定以及向您提供服务及提升服务质量的目的，为了实现这一目的，我们会把您的信息用于下列用途：</p>
          <p>4.1 向您提供币老铁各项服务及客户服务，并维护、改进这些服务。</p>
          <p>4.2 比较信息的准确性，并与第三方进行验证。例如，将您向我们提交的身份信息与身份验证的服务机构进行验证。</p>
          <p>4.3 为使您知晓自己使用币老铁的各项服务的情况或了解币老铁的服务，向您发送服务状态的通知、营销活动及其他商业性电子信息。</p>
          <p>4.4 对币老铁用户的身份数据、行为信息等进行综合统计、分析或加工等处理，可能会出于销售、奖励或为了让您拥有更广泛的社交圈的需要而使用、共享或披露这些经过处理的信息。</p>
          <p>4.5 预防或禁止非法的活动。</p>
          <p>4.6 履行我们在《用户协议》或本《用户隐私政策》中的义务和行使我们的权利。</p>
          <p>4.7 经您许可的其他用途。</p>
          <p>五、信息共享</p>
          <p>我们对您的信息承担保密义务，但我们有权在下列情况下将您的信息与第三方共享：</p>
          <p>5.1 获得您的同意或授权。</p>
          <p>5.2 为了向您提供或推荐服务、产品，或为了向您提供更完善的服务，，我们会在 币老铁 内部以及与各合作方等第三方共享您的相关信息。</p>
          <p>5.3 某些情况下，只有共享您的信息，才能提供您需要的服务和（或）产品，或处理您与他人的交易纠纷或争议。</p>
          <p>5.4 为了判断您的账户或信息是否安全。</p>
          <p>5.5 某些服务和（或）产品由我们的合作伙伴提供或由我们与合作伙伴、供应商共同提供，我们会与其共享提供服务和（或）产品需要的信息。</p>
          <p>5.6 我们与第三方进行联合推广活动，我们可能与其共享活动过程中产生的、为完成活动所必要的个人信息。</p>
          <p>5.7 为维护币老铁和其他币老铁用户的合法权益。</p>
          <p>5.8根据法律规定及合理商业习惯，在我们计划与其他公司合并或被其收购或进行其他资本市场活动（包括但不限于融资、IPO、债券发行）时，以及其他情形下我们需要接受来自其他主体的尽职调查时，我们会把您的信息提供给必要的主体，但我们会通过和这些主体签署保密协议等方式要求其对您的个人信息采取合理的保密措施。</p>
          <p>5.9 为了维护和改善我们的服务。</p>
          <p>5.10根据法律法规的规定或有权机关的要求。</p>
          <p>如我们或我们的关联公司与任何上述第三方分享您的个人信息，我们将努力确保该等第三方在使用您的个人信息时遵守本《用户隐私政策》及我们要求其遵守的其他适当的保密和安全措施。</p>
          <p>六、用户信息查询管理</p>
          <p>您可随时登录您在币老铁的账户查询并管理该账户下您的个人信息。</p>
          <p>七、信息安全</p>
          <p>我们仅在本《用户隐私政策》所述目的所必需的期间和法律法规要求的时限内保留您的个人信息。我们使用各种安全技术和程序，以防信息的丢失、不当使用、未经授权阅览或披露。但请您理解，由于技术的限制以及可能存在的各种恶意手段，在互联网行业，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全。您需要了解，您接入我们的服务所用的系统和通讯网络，有可能因我们可控范围外的因素而出现问题。</p>
          <p>八、对第三方责任的声明</p>
          <p>本《用户隐私政策》仅适用于我们所收集的信息，并不适用于任何第三方提供的服务或第三方的信息使用规则，我们对任何第三方使用由您提供的信息不承担任何责任。
          请您注意，您使用的合作方服务、您访问的第三方网站经营者、您使用的第三方服务提供者和由 币老铁 处接受您的个人信息的第三方可能有自己的隐私权保护政策。
          我们会尽商业上的合理努力去要求这些主体对您的个人信息采取保护措施，但我们无法保证这些主体一定会按照我们的要求采取保护措施，亦不对这些主体的行为及后果承担任何责任。如果您发现这些第三方创建的网页或第三方开发的应用程序存在风险时，建议您终止相关操作以保护您的合法权益。</p>
          <p>九、未成年人隐私权特别约定</p>
          <p>我们重视未成年人的个人信息保护，如您为未成年人，建议您请您的监护人仔细阅读本政策，并在征得您的监护人同意的前提下使用我们的服务或向我们提供信息。</p>
          <p>十、本政策的修订</p>
          <p>我们可能随时会对本政策进行变更，我们将以网站公告的方式予以公布而不再另行单独通知您，该等变更将在公告期限届满时即时生效。若您在本政策变更后继续访问币老铁移动设备客户端，或使用币老铁提供的任一服务，您确认这代表您已充分阅读、理解并接受修改后的本政策并受之约束。</p>
          <p>十一、法律适用和争议解决联系我们</p>
          <p>与用户隐私政策有关的全部内容，包括但不限于条款、修改、争议解决等均适用中国（为用户隐私政策之目的，中国仅指中国大陆地区，不包括中国香港特别行政区、中国澳门特别行政区、中国台湾地区）的法律。凡因本用户隐私政策引起的或与本用户隐私政策有关的全部争议，用户与币老铁应当友好协商解决。不能协商或者协商不能解决的，双方均有权向币老铁注册地有管辖权的人民法院提起诉讼。如果您有任何的意见和建议，欢迎您与我们沟通反馈。我们的联系方式见下：</p>
          <p>blaotie@163.com</p>
        </div>
        <p class="zhidaole" @click="guanbi2">知道了</p>
      </div>
    </div>
    <!-- 认证成功失败的样式 -->
    <div class="defeated" v-show="authentication_return1">
        <div class="defeated_id">
            <div class="defeated_head">
                温馨提示
            </div>
            <div class="defeated_text">
                恭喜您,注册成功!
            </div>
            <div class="defeated_button">
                <button @click="defeated_id_none">确定</button>
            </div>
        </div>
    </div>
    <div class="defeated" v-if="authentication_return2">
        <div class="defeated_id">
            <div class="defeated_head">
                温馨提示
            </div>
            <div class="defeated_text">
                您提供的账号或密码信息有误，请检查后重新认证
            </div>
            <div class="defeated_button">
                <button @click="defeated_id_none1">确定</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  props:['gg'],
  data() {
    return {
      userName: "",
      password: "",
      code: "",
      tel: "",
      show: true,
      Useragreement: false,
      Userinstructions: false,
      sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
      auth_time: 0, /*倒计时 计数器*/
      mima:true,
      yan:true,
      defeated_id:'false',
      authentication_return1:false,
      authentication_return2:false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 是否同意协议
    agreen() {
      this.show = !this.show;
    },
    user1() {
        this.Useragreement = true;
    },
    guanbi1() {
        this.Useragreement = false;
    },
    user2() {
        this.Userinstructions = true;
    },
    guanbi2() {
        this.Userinstructions = false;
    },
    denglu() {
        this.gg.login=true
        this.gg.register=false
    },
    find(){
        this.gg.findmima=true
        this.gg.register=false
    },
    del1(){
      this.userName=''
    },
    del2(){
      this.tel=''
    },
    del3(){
      this.code=''
    },
    del4(){
      this.password=''
    },
    // 获取验证码的倒数
    getAuthCode:function () {
      // 验证码
          let param = new URLSearchParams();
          param.append('phone',18618266094);
        this.$axios.post('http://api.xdorj.cn/api/user/code',param,{//post请求，在请求时会自动把param拼接再Param后面
            headers:{
              'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'//必须要加头
          },
        }).then(function (response) {
          console.log(response)}
        )
        // 倒计时
        this.sendAuthCode = false;
        this.auth_time = 100;
        var auth_timetimer =  setInterval(()=>{
            this.auth_time--;
            if(this.auth_time<=0){
                this.sendAuthCode = true;
                clearInterval(auth_timetimer);
            }
        }, 1000);
    },
    showyan(){
      this.yan=!this.yan
      this.mima=!this.mima
    },
    zhuce(){
        if(this.userName !== '' && this.password !== ''){
            if( this.password ==123123) {
                this.authentication_return1 = true
                //存浏览器
                sessionStorage.setItem('userName', this.userName);
                sessionStorage.setItem('loginT', 1);

                //跳转
                this.$router.push({path:'/my'})

                //改名字
                this.$store.commit('dengluUsername',this.userName);
                //改状态值
                this.$store.commit('dengluTstate');
            }else{
                this.authentication_return2 = true; 
            }
        }else{
            this.authentication_return2=true
        }
      },
    defeated_id_none(){
      this.authentication_return1 = false
    },
    defeated_id_none1(){
      this.authentication_return2 = false
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.agreement {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
}
.agreement .inner {
  width: 93%;
  height: 12.6rem;
  margin-left: 3.5%;
  margin-top: 1.3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50%;
  margin-left: -47.5%;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.agreement .inner img {
  width: 100%;
  height: 2rem;
}
.agreement .inner p.xieyi {
  width: 100%;
  height: 2rem;
  text-align: center;
  position: relative;
  top: -2rem;
  font-size: 0.65rem;
  color: white;
  line-height: 2rem;
  margin: 0;
}
.agreement .wenzi {
  width: 100%;
  height: 8rem;
  background: white;
  padding: 0 1.2rem;
  box-sizing: border-box;
  font-size: 0.53rem;
  position: relative;
  top: -2.2rem;
  overflow: auto;
  border-bottom-right-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
}
.agreement .zhidaole {
  width: 100%;
  height: 1.5rem;
  background: white;
  text-align: center;
  position: absolute;
  bottom: .5rem;
  font-size: 0.65rem;
  line-height: 1.5rem;
  border-top: 1px solid #e3e3e3;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  color: blue;
}
.register {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 999;
  overflow: auto;
}
.register .header {
  width: 93%;
  height: 2rem;
  margin-left: 3.5%;
  margin-top: 5rem;
}
.register .header .logo {
  width: 2rem;
}
.register .header .blaotie {
  width: 4rem;
  position: relative;
  top: -0.35rem;
}
.register .input {
  width: 93%;
  height: 12rem;
  margin-left: 3.5%;
  margin-top: 2.3rem;
}
.register .input .zhanghao {
  width: 100%;
  height: 1.2rem;
  border-bottom: 1px solid #e3e3e3;
  color: #8c8c8c;
}
.register .input .zhanghao .icon1,
img {
  width: 0.6rem;
  position: relative;
  top: 0.1rem;
}
.register .input .zhanghao input {
  width: 88%;
  height: 1rem;
  text-align: left;
  border: 0;
  box-sizing: border-box;
  margin-left: 0.5rem;
  font-size: 0.58rem;
  outline:none;
}
.register .input .tel {
  width: 100%;
  height: 1.2rem;
  margin-top: 1.2rem;
  border-bottom: 1px solid #e3e3e3;
  color: #8c8c8c;
}
.register .input .tel .icon2,
img {
  width: 0.6rem;
  position: relative;
  top: 0.1rem;
}
.register .input .tel input {
  width: 88%;
  height: 1rem;
  text-align: left;
  border: 0;
  box-sizing: border-box;
  margin-left: 0.5rem;
  font-size: 0.58rem;
  outline:none;
}
.register .input .idcode {
  width: 100%;
  height: 1.2rem;
  margin-top: 1.3rem;
  border-bottom: 1px solid #e3e3e3;
  color: #8c8c8c;
}
.register .input .idcode .icon1,
img {
  width: 0.6rem;
  position: relative;
  top: 0.1rem;
}
.register .input .idcode input {
  width: 45%;
  height: 1rem;
  text-align: left;
  border: 0;
  box-sizing: border-box;
  margin-left: 0.5rem;
  font-size: 0.58rem;
  outline:none;
}
.register .input .idcode span{
  float: right;
}
.register .input .mima {
  width: 100%;
  height: 1.2rem;
  margin-top: 1.3rem;
  border-bottom: 1px solid #e3e3e3;
  color: #8c8c8c;
}
.register .input .mima .icon2,
img {
  width: 0.6rem;
  position: relative;
  top: 0.1rem;
}
.register .input .mima input {
  width: 80%;
  height: 1rem;
  text-align: left;
  border: 0;
  box-sizing: border-box;
  margin-left: 0.5rem;
  font-size: 0.58rem;
  outline:none;
}
.register .input .mima .eye{
    width: .8rem;
    float: right;
    position: relative;
    top: .2rem;
}
.register .input .mima .shan{
    float: right;
    position: relative;
    top: .1rem;
    left :-.15rem;
}
.register .input .login {
  width: 100%;
  height: 1.6rem;
  margin-top: 0.9rem;
  font-size: 0.48rem;
}
.register .input .login img {
  width: 100%;
}
.register .input .login p {
  width: 100%;
  height: 1.6rem;
  text-align: center;
  line-height: 1rem;
  position: relative;
  top: -2rem;
  font-size: 0.65rem;
  color: white;
  line-height: 2.3rem;
  margin: 0;
}
.register .input .xieyi {
  width: 100%;
  height: 1.6rem;
  margin-top: 0.2rem;
  text-align: center;
  font-size: 0.4rem;
  line-height: 1.6rem;
}
.register .input .xieyi img {
  width: 0.5rem;
}
.register .input .foot {
  width: 100%;
  height: 1.6rem;
  font-size: 0.48rem;
  line-height: 0.1rem;
}
.register .input .foot .p1 {
  float: left;
}
.register .input .foot .p2 {
  float: right;
}
.defeated{
    position:fixed;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0.5);
    z-index:3;
    top:0rem;
    left:0;
}
.defeated_id{
    width:14rem;
    height:7rem;
    background:#FFF;
    top:50%;
    margin-top:-3.5rem;
    left:50%;
    margin-left:-7rem;
    z-index:4;
    border-radius: 0.4rem;
    position:fixed;
}
.defeated_head{
    font-size:0.8rem;
    font-weight: 800;
    text-align: center;
    height:2rem;
    line-height: 2rem;
    letter-spacing:0.15rem;
    position:relative;
}
.defeated_img{
    position:absolute;
    top:0.2rem;
    left:65%;
    width:0.8rem;
    height:0.8rem;
}
.defeated_img img{
    width:100%;
    height:100%;
}
.defeated_text{
    color:#000;
    text-align: center;
    font-size:0.6rem;
    padding:0rem 1.5rem;
    letter-spacing:0.1rem;
    line-height: 1.2rem;
}
.defeated_button{
    position:relative;
}
.defeated_button button{
    position:absolute;
    left:50%;
    top:0.5rem;
    margin-left:-1.5rem;
    width:3rem;
    height:1rem;
    background:#7777BB;
    outline:none;
    border:1px solid #7777BB;
    color:#FFF;
    letter-spacing:0.1rem;
}
</style>