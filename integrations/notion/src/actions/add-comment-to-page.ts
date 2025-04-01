import * as notion from '../notion'
import * as bp from '.botpress'

export const addCommentToPage: bp.IntegrationProps['actions']['addCommentToPage'] = async ({ ctx, client, input }) => {
  try {
    const response = await notion.addCommentToPage(ctx, client, input.pageId, input.commentBody)
    if (response) {
      console.info('Successfully added comment to page')
      return {}
    } else {
      return {}
    }
  } catch {
    return {}
  }
}
