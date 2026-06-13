import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class OndoFinanceApi implements ICredentialType {
        name = 'N8nDevOndoFinanceApi';

        displayName = 'Ondo Finance API';

        icon: Icon = { light: 'file:../nodes/OndoFinance/ondo-finance.png', dark: 'file:../nodes/OndoFinance/ondo-finance.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.gm.ondo.finance',
                        required: true,
                        placeholder: 'https://api.gm.ondo.finance',
                        description: 'The base URL of your Ondo Finance API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'x-api-key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
