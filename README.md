# LINE Blog Generator with Claude API

? LINE�{�b�g���g����Claude API�Ńu���O�L����������������V�X�e��

## �@�\

- LINE���b�Z�[�W�Ńg�s�b�N�𑗐M
- Claude API�������Ńu���O�L���𐶐�
- ����������LINE�Œʒm

## �Z�p�X�^�b�N

- **Platform**: Vercel (Serverless Functions)
- **AI**: Anthropic Claude API
- **Messaging**: LINE Messaging API
- **Runtime**: Node.js

## �Z�b�g�A�b�v

### 1. ���ϐ��̐ݒ�

Vercel�_�b�V���{�[�h�ňȉ��̊��ϐ���ݒ�F

```
CLAUDE_API_KEY=your_claude_api_key
LINE_CHANNEL_SECRET=your_line_channel_secret
LINE_CHANNEL_ACCESS_TOKEN=your_line_channel_access_token
```

### 2. �f�v���C

```bash
# Vercel CLI�Ńf�v���C
vercel --prod
```

### 3. LINE Webhook�ݒ�

LINE Developers Console�� Webhook URL ��ݒ�F
```
https://your-app.vercel.app/webhook
```

## API �G���h�|�C���g

- `POST /webhook` - LINE Webhook��M

## �g����

1. LINE�{�b�g��F�B�ǉ�
2. �u���O�̃g�s�b�N�����b�Z�[�W�ő��M
3. �����������ꂽ�u���O�L�����ۑ������
4. �����ʒm����M

## ���C�Z���X

MIT

