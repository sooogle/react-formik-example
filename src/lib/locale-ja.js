 /* eslint-disable */
export const localeJa = {
  mixed: {
    default: "${path}が不正です",
    required: "${path}は入力必須です",
    oneOf: "${path}は次の値から選択する必要があります: ${values}",
    notOneOf: "${path}は次の値以外を選択する必要があります: ${values}",
  },
  string: {
    length: "${path}は${length}文字で入力してください",
    min: "${path}は${min}文字以上で入力してください",
    max: "${path}は${max}文字以下で入力してください",
    matches: '${path}は次の形式で入力してください: "${regex}"',
    email: "メールアドレスの形式が正しくありません",
    url: "URLの形式が正しくありません",
    trim: "${path}は前後に空白を含んではいけません",
    lowercase: "${path}は小文字で入力してください",
    uppercase: "${path}は大文字で入力してください"
  },
  number: {
    min: "${path}は${min}以上の数字を入力してください",
    max: "${path}は${max}以下の数字を入力してください",
    lessThan: "${path}は${less}より小さい数字を入力してください",
    moreThan: "${path}は${more}より大きい数字を入力してください",
    notEqual: "${path}は${notEqual}と等しくない数字を入力してください",
    positive: "${path}は正の数を入力してください",
    negative: "${path}は負の数を入力してください",
    integer: "${path}は整数を入力してください",
  },
  date: {
    min: "${path}は${min}以降の日付を入力してください",
    max: "${path}は${max}以前の日付を入力してください",
  },
  object: {
    noUnknown:
      "${path}に予期せぬパタメーターが含まれています"
  },
  array: {
    min: "${path}は${min}個以上選択してください",
    max: "${path}は${max}個以下で選択してください",
  },
};
