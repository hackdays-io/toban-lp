export default function Pricing() {
    return (
      <section className="pricing">
        <h2>はじめやすく、続けやすい。</h2>
        <table>
          <thead>
            <tr>
              <th>プラン</th>
              <th>内容</th>
              <th>料金</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>フリープラン</td>
              <td>1プロジェクト / 5ロールまで</td>
              <td>無料</td>
            </tr>
            <tr>
              <td>スタンダード</td>
              <td>API連携、人数制限解除</td>
              <td>月額 ¥4,980〜</td>
            </tr>
            <tr>
              <td>カスタム</td>
              <td>法人・自治体向け支援</td>
              <td>お問合せ</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }